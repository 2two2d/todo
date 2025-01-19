import { isTruthy, makeClassname } from '@shared/utils'

import TextAction from '@shared/ui/components/text-action'

import { useActions } from '@settings/store/utils/use-actions'

import { ETodoActions } from '@entities/todo/model/enum'

import ListWithDelimiter from '@shared/ui/components/list-with-delimiter'

import { useGetCategoriesByIds } from '@settings/store/utils/selectors'

import CategoryBadge from '@entities/category/ui/category-badge'

import Icon from '@shared/ui/components/icon'

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
    isDone
  } = todo

  const { toggleTodoIsBlocked, deleteTodo, toggleTodoIsDone } = useActions()

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

  const actionButtonsWithBadges = [
    ...categories.map((item) => {
      return (
        <CategoryBadge category={ item } key={ item.id } />
      )
    }),

    actions?.includes(ETodoActions.BLOCK) && !isDone && (
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
    !isDone && !isBlocked && style['todo-note'],
    isDone && style['todo-note__completed'],
    isBlocked && style['todo-note__blocked'],
    className
  )

  return (
    <div className={ calcClassName } { ...props }>
      <p onClick={ handleToggleTodoIsDone }
        className={ style.text }
      >
        { text }

        { isDone && <Icon source="check" size={ 1.2 } /> }
      </p>

      <ListWithDelimiter className={ style['actions-block'] }>
        { ...actionButtonsWithBadges }
      </ListWithDelimiter>
    </div>
  )
}

export default TodoNote
