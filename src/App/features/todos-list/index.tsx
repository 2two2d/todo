import { useMemo } from 'react'

import FlexibleList from '@shared/ui/components/flexible-list'

import { useGetTodos } from '@settings/store/utils/selectors'
import TodoNote from '@entities/todo/ui/todo-note'

import { makeClassname } from '@shared/utils'

import { ETodoActions } from '@entities/todo/model/enum'

import type { ReactElement, ReactNode } from 'react'

import type { IDetailedProps } from '@shared/interface'

const TodosList = ({ className, ...props }: IDetailedProps<HTMLDivElement>): ReactNode => {
  const todos = useGetTodos()

  const list: ReactElement[] = useMemo(() => {
    return todos.map((item) => {
      return (
        <TodoNote todo={ item }
          actions={ [ETodoActions.DELETE, ETodoActions.BLOCK, ETodoActions.COMPLETE] }
          key={ item.id }
        />
      )
    })
  }, [todos])

  return (
    <FlexibleList items={ list }
      className={ makeClassname('!bg-none !w-[500px] !gap-10', className) }
      itemClassName="w-full"
      { ...props }
    />
  )
}

export default TodosList
