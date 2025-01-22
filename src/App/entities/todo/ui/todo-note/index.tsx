import { isTruthy, makeClassname } from '@shared/utils'

import TextAction from '@shared/ui/components/text-action'

import { useActions } from '@settings/store/utils/use-actions'

import { ETodoActions } from '@entities/todo/model/enum'

import ListWithDelimiter from '@shared/ui/components/list-with-delimiter'

import { useGetCategoriesByIds } from '@settings/store/utils/selectors'

import CategoryBadge from '@entities/category/ui/category-badge'

import Icon from '@shared/ui/components/icon'

import { ECategoryActions } from '@entities/category/model/enum'

import { MAX_ATTACHED_CATEGORIES } from '@shared/consts'

import { useModalState } from '@shared/lib/modal/utils/use-modal-state'

import { EModalKeys } from '@shared/enum'

import style from './index.module.scss'

import type { ReactNode } from 'react'

import type { IDetailedProps } from '@shared/interface'
import type { ITodo } from '@entities/todo/model'

interface ITodoNoteProps extends IDetailedProps<HTMLDivElement> {
  todo: ITodo
  actions?: ETodoActions[]
}

const TodoNote = ({ todo, actions = [], className, ...props }: ITodoNoteProps): ReactNode => {
  const { id,
    text,
    categoryArrIds,
    isBlocked,
    isCompleted
  } = todo

  const { toggleTodoIsBlocked, deleteTodo, toggleTodoIsDone } = useActions()

  const { openModal } = useModalState()

  const getCategoriesByIds = useGetCategoriesByIds()

  const categories = isTruthy(categoryArrIds) ? getCategoriesByIds(categoryArrIds) : []

  const handleToggleTodoIsDone = (): void => {
    toggleTodoIsDone(id)
  }

  const handleToggleTodoBlock = (): void => {
    toggleTodoIsBlocked(id)
  }

  const handleDeleteTodo = (): void => {
    deleteTodo(id)
  }

  const handleOpenAttachCategoryModal = (): void => {
    openModal<{ todoId: string }>(EModalKeys.AttachCategory, { todoId: id })
  }

  const actionButtonsWithBadges = [
    categories.length < MAX_ATTACHED_CATEGORIES && (
      <div onClick={ handleOpenAttachCategoryModal }>
        <Icon source="add" />
      </div>
    ),

    ...categories.map((item) => {
      return (
        <CategoryBadge category={ item }
          actions={ [ECategoryActions.DETACH] }
          todoId={ id }
          className={ style['category-badge'] }
          key={ item.id }
        />
      )
    }),

    actions?.includes(ETodoActions.BLOCK) && !isCompleted && (
      <TextAction text={ isBlocked ? 'Разблокировать' : 'Заблокировать' }
        iconSource={ isBlocked ? 'padlock-open' : 'padlock-close' }
        onClick={ handleToggleTodoBlock }
        className="!py-0.5"
      />
    ),

    actions?.includes(ETodoActions.DELETE) && (
      <TextAction text="Удалить"
        iconSource="delete"
        onClick={ handleDeleteTodo }
        className="text-text-validation-text !py-0.5"
      />
    )
  ]

  const calcClassName = makeClassname(
    !isCompleted && !isBlocked && style['todo-note'],
    isCompleted && style['todo-note__completed'],
    isBlocked && style['todo-note__blocked'],
    className
  )

  return (
    <div className={ calcClassName } { ...props }>
      <p onClick={ handleToggleTodoIsDone }
        className={ style.text }
      >
        { text }

        { isCompleted && <Icon source="check" size={ 1.2 } /> }
      </p>

      <ListWithDelimiter className={ style['actions-block'] }>
        { ...actionButtonsWithBadges }
      </ListWithDelimiter>
    </div>
  )
}

export default TodoNote
