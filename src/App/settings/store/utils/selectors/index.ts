import { useSelector } from 'react-redux'

import { CategorySlice } from '@entities/category/model'

import { TodoSlice } from '@entities/todo/model'

import type { ICategory, ICategoryCreatePort } from '@entities/category/model'

import type { ITodo, ITodoCreatePort } from '@entities/todo/model'

import type { RootState } from '@settings/store'

/**
 * Categories selectors
 */
const useGetCategories = (): ICategory[] => useSelector((state: RootState) => state.category.categories)

const useGetCategoriesByIds = (): (payload: string[]) => ICategory[] => {
  const categoryState = useSelector((state: RootState) => state.category)

  return (payload: string[]): ICategory[] => CategorySlice.selectors.
    getCategoriesByIds({ category: categoryState }, {
      payload,
      type: 'query'
    })
}

const useDoesCategoryExist = (): (payload: ICategoryCreatePort) => boolean => {
  const categoryState = useSelector((state: RootState) => state.category)

  return (payload: ICategoryCreatePort): boolean => CategorySlice.selectors.
    doesCategoryExist({ category: categoryState }, {
      payload,
      type: 'query'
    })
}

/**
 * Todos selectors
 */
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
  useGetCategories,
  useGetCategoriesByIds,
  useDoesCategoryExist,
  useGetTodos,
  useDoesTodoExist
}
