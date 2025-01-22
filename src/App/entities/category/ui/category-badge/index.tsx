import WithToolTip from '@shared/ui/components/with-tool-tip'
import Badge from '@shared/ui/components/badge'

import AnimationInteractive from '@shared/ui/animations/ineractive'

import TextAction from '@shared/ui/components/text-action'

import { useActions } from '@settings/store/utils/use-actions'

import { isTruthy } from '@shared/utils'

import { ECategoryActions } from '@entities/category/model/enum'

import type { ITodo } from '@entities/todo/model'

import type { ReactNode } from 'react'
import type { IDetailedProps } from '@shared/interface'
import type { ICategory } from '@entities/category/model'

interface ICategoryBadgeProps extends IDetailedProps<HTMLDivElement> {
  category: ICategory
  actions?: ECategoryActions.ATTACH | Omit<ECategoryActions, ECategoryActions.ATTACH>[]
  todoId?: ITodo['id']

  onAction?(): void
}

const CategoryBadge =
({ category, actions = [], todoId, onAction, className, ...props }: ICategoryBadgeProps): ReactNode => {
  const { deleteCategory, detachCategory, attachCategory } = useActions()

  const handleAction = (): void => {
    onAction && onAction()
  }

  const isActionAttach = actions === ECategoryActions.ATTACH

  const handleDelete = (): void => {
    deleteCategory(category.id)
    handleAction()
  }

  const handleDetachCategory = (): void => {
    if (isTruthy(todoId)) detachCategory({ categoryId: category.id, todoId })
    handleAction()
  }

  const handleAttachCategory = (): void => {
    if (isTruthy(todoId)) attachCategory({ todoId, categoryId: category.id })
    handleAction()
  }

  const actionButtons = isActionAttach
    ? []
    : [
      actions?.includes(ECategoryActions.DELETE) && (
        <TextAction text="Удалить категорию"
          iconSource="delete"
          onClick={ handleDelete }
          className="text-text-validation-text"
        />
      ),

      actions?.includes(ECategoryActions.DETACH) && (
        <TextAction text="Убрать категорию"
          iconSource="detach"
          onClick={ handleDetachCategory }
          className="text-text-validation-text"
        />
      )
    ]

  const badgeComponent = (
    <Badge text={ category.name }
      color={ category.color }
      className={ className }
      { ...isActionAttach && { onClick: handleAttachCategory } }
    />
  )

  return isTruthy(actionButtons)
    ? (
      <WithToolTip
        toolTip={ actionButtons }
        { ...props }
      >
        <AnimationInteractive>
          { badgeComponent }
        </AnimationInteractive>
      </WithToolTip>
    )
    : isActionAttach
      ? (
        <AnimationInteractive>
          { badgeComponent }
        </AnimationInteractive>
      )
      : badgeComponent
}

export default CategoryBadge
