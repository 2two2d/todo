import { useMemo } from 'react'

import { useSearchParams } from 'react-router'

import FlexibleList from '@shared/ui/components/flexible-list'
import TodoNote from '@entities/todo/ui/todo-note'

import { makeClassname } from '@shared/utils'

import { ETodoActions } from '@entities/todo/model/enum'

import { filterTodos } from '@widgets/todos-list/helpers'

import { ESearchParamsKeys } from '@shared/enum/search-params-keys'

import { useGetTodos } from '@entities/todo/selectors'

import type { IDetailedProps } from '@shared/interface'
import type { ESearchParamsValues } from '@shared/enum/search-params-values'
import type { ReactElement, ReactNode } from 'react'

const TodosList = ({ className, ...props }: IDetailedProps<HTMLDivElement>): ReactNode => {
  const todos = useGetTodos()

  const [searchParams] = useSearchParams()

  const filterKey = searchParams.get(ESearchParamsKeys.FILTER_BY) as ESearchParamsValues

  const list: ReactElement[] = useMemo(() => {
    return filterTodos({ todos, filterKey }).map((item) => {
      return (
        <TodoNote todo={ item }
          actions={ [ETodoActions.DELETE, ETodoActions.BLOCK, ETodoActions.COMPLETE] }
          key={ item.id }
        />
      )
    })
  }, [todos, filterKey])

  return (
    <FlexibleList items={ list }
      className={ makeClassname('!bg-none !w-[500px] !gap-10', className) }
      itemClassName="w-full"
      { ...props }
    />
  )
}

export default TodosList
