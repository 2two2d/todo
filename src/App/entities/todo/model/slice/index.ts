import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import isEqual from 'lodash.isequal'

import { isTruthy } from '@shared/utils'

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
      state.todos.push({ ...payload, id: uuid(), isBlocked: false, isCompleted: false })
    },

    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== payload)
    },

    toggleTodoIsDone: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.map((item) => {
        return item.id === payload ? { ...item, isCompleted: !item.isCompleted } : item
      })
    },

    toggleTodoIsBlocked: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.map((item) => {
        return item.id === payload ? { ...item, isBlocked: !item.isBlocked } : item
      })
    },

    attachCategory: (state, { payload }: PayloadAction<{ todoId: string; categoryId: string }>) => {
      state.todos = state.todos.map((item) => {
        return item.id === payload.todoId
          ? { ...item, categoryArrIds: [...item.categoryArrIds ?? [], payload.categoryId]}
          : item
      })
    },

    detachCategory: (state, { payload }: PayloadAction<{ todoId: string; categoryId: string }>) => {
      const { categoryId, todoId } = payload

      state.todos = state.todos.map((item) => {
        if (item.id === todoId) {
          const newListOfCategories = (item.categoryArrIds ?? []).filter((category) => {
            return category !== categoryId
          })

          return { ...item, categoryArrIds: newListOfCategories }
        }

        return item
      })
    }
  },
  selectors: {
    doesTodoExist: (state, { payload }: PayloadAction<ITodoCreatePort>): boolean => {
      return isTruthy(state.todos.find((item) => {
        return item.text === payload.text && isEqual(item.categoryArrIds, payload.categoryArrIds)
      }))
    }
  }
})

export {
  TodoSlice,
  type ITodoSliceState
}
