import { useMemo } from 'react'

import FlexibleList from '@shared/ui/components/flexible-list'

import { useGetCategories } from '@settings/store/utils/selectors'

import NumberLimit from '@shared/ui/components/number-limit'
import { MAX_CATEGORIES } from '@entities/category/model'

import CategoryBadge from '@entities/category/ui/category-badge'

import AnimationAppear from '@shared/ui/animations/appear'

import { ECategoryActions } from '@entities/category/model/enum'

import type { ReactElement, ReactNode } from 'react'

import type { IDetailedProps } from '@shared/interface'

interface ICategoryListProps extends IDetailedProps<HTMLDivElement> {
  todoId?: string
  actions?: ECategoryActions.ATTACH | Omit<ECategoryActions, ECategoryActions.ATTACH>[]
  onAction?(): void
}

const CategoriesList = ({ actions, todoId, onAction, ...props }: ICategoryListProps): ReactNode => {
  const categories = useGetCategories()

  const handleAction = onAction

  const list: ReactElement[] = useMemo(() => {
    return categories.map((item) => {
      return (
        <AnimationAppear key={ item.id }>
          <CategoryBadge category={ item }
            actions={ actions ?? [ECategoryActions.DELETE] }
            todoId={ todoId }
            onAction={ handleAction }
          />
        </AnimationAppear>
      )
    }).concat(
      <NumberLimit maxNumber={ MAX_CATEGORIES } currentNumber={ categories.length } className="leading-6" />
    )
  }, [categories])

  return (
    <FlexibleList items={ list } { ...props } />
  )
}

export default CategoriesList
