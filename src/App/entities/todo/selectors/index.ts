import { useSelector } from 'react-redux'

import { TodoSlice } from '@entities/todo/model'

import type { ITodo, ITodoCreatePort } from '@entities/todo/model'

import type { RootState } from '@settings/store'

const useGetTodos = (): ITodo[] => useSelector((state: RootState) => state.todo.todos)

const useDoesTodoExist = (): (payload: ITodoCreatePort) => boolean => {
  const todoState = useSelector((state: RootState) => state.todo)

  return (payload: ITodoCreatePort): boolean => TodoSlice.selectors.
    doesTodoExist({ todo: todoState }, {
      payload,
      type: 'query'
    })
}

export {
  useGetTodos,
  useDoesTodoExist
}
