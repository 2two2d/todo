import WithToolTip from '@shared/ui/components/with-tool-tip'
import Badge from '@shared/ui/components/badge'

import AnimationInteractive from '@shared/ui/animations/ineractive'

import TextAction from '@shared/ui/components/text-action'

import { useActions } from '@settings/store/utils/use-actions'

import { isTruthy } from '@shared/utils'

import { ECategoryActions } from '@entities/category/model/enum'

import type { ReactNode } from 'react'
import type { IDetailedProps } from '@shared/interface'
import type { ICategory } from '@entities/category/model'

interface ICategoryBadgeProps extends IDetailedProps<HTMLDivElement> {
  category: ICategory
  actions?: ECategoryActions[]
}

const CategoryBadge = ({ category, actions = [], className, ...props }: ICategoryBadgeProps): ReactNode => {
  const { deleteCategory } = useActions()

  const handleDelete = (): void => {
    deleteCategory(category.id)
  }

  const actionButtons = [
    actions?.includes(ECategoryActions.DELETE) && (
      <TextAction text="Удалить категорию"
        iconSource="delete"
        onClick={ handleDelete }
        className="text-text-validation-text"
      />
    )
  ]

  return isTruthy(actions)
    ? (
      <WithToolTip className={ className }
        toolTip={ actionButtons }
        { ...props }
      >
        <AnimationInteractive>
          <Badge text={ category.name } color={ category.color } />
        </AnimationInteractive>
      </WithToolTip>
    )
    : <Badge text={ category.name } color={ category.color } />
}

export default CategoryBadge
