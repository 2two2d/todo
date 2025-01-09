import { useMemo } from 'react'

import FlexibleList from '@shared/ui/components/flexible-list'

import { useGetCategories } from '@settings/store/utils/selectors'

import NumberLimit from '@shared/ui/components/number-limit'
import { MAX_CATEGORIES } from '@entities/category/model'

import CategoryBadge from '@entities/category/ui/category-badge'

import AnimationAppear from '@shared/ui/animations/appear'

import type { ReactElement, ReactNode } from 'react'

import type { IDetailedProps } from '@shared/interface'

const CategoriesList = ({ ...props }: IDetailedProps<HTMLDivElement>): ReactNode => {
  const categories = useGetCategories()

  const list: ReactElement[] = useMemo(() => {
    return categories.map((item) => {
      return (
        <AnimationAppear key={ item.id }>
          <CategoryBadge category={ item } actions={ ['delete'] } />
        </AnimationAppear>
      )
    }).concat(
      <NumberLimit maxNumber={ MAX_CATEGORIES } currentNumber={ categories.length } className="leading-7" />
    )
  }, [categories])

  return (
    <FlexibleList items={ list } { ...props } />
  )
}

export default CategoriesList
