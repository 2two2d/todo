import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import isEqual from 'lodash.isequal'

import { truthy } from '@shared/utils'

import type { PayloadAction } from '@reduxjs/toolkit'

import type { ITodo, ITodoCreatePort } from '@entities/todo/model/interface'

interface ITodoSliceState {
  todos: ITodo[]
}

const initialState: ITodoSliceState = {
  todos: []
}

const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<ITodoCreatePort>) => {
      state.todos.push({ ...payload, id: uuid(), is_blocked: false, is_done: false })
    },

    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos.filter((item) => item.id !== payload)
    },

    toggleTodoIsDone: (state, { payload }: PayloadAction<string>) => {
      state.todos.map((item) => {
        return item.id === payload ? { ...item, is_done: !item.is_done } : item
      })
    },

    toggleTodoIsBlocked: (state, { payload }: PayloadAction<string>) => {
      state.todos.map((item) => {
        return item.id === payload ? { ...item, is_blocked: !item.is_blocked } : item
      })
    },

    addTodoCategory: (state, { payload }: PayloadAction<{ todoId: string; categoryId: string }>) => {
      state.todos.map((item) => {
        return item.id === payload.todoId
          ? { ...item, categories_ids: [...item.categories_ids ?? [], payload.categoryId]}
          : item
      })
    },

    deleteTodoCategory: (state, { payload }: PayloadAction<{ todoId: string; categoryId: string }>) => {
      state.todos.map((item) => {
        if (item.id === payload.todoId) {
          const newListOfCategories = item.categories_ids ?? [].filter((category) => {
            return category !== payload.categoryId
          })

          return { ...item, categories_ids: newListOfCategories }
        }

        return item
      })
    }
  },
  selectors: {
    doesTodoExist: (state, { payload }: PayloadAction<ITodoCreatePort>): boolean => {
      return truthy(state.todos.find((item) => {
        return item.text === payload.text && isEqual(item.categories_ids, payload.categories_ids)
      }))
    }
  }
})

export {
  TodoSlice,
  type ITodoSliceState
}
