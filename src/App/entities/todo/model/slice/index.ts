import {ITodo, ITodoCreatePort} from "@entities/todo/model/interface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface ITodoSliceState {
    todos: ITodo[]
}

const initialState: ITodoSliceState = {
    todos: []
}

export const todoSlice = createSlice({
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

        addTodoCategory: (state, { payload }: PayloadAction<{todoId: string, categoryId: string}>) => {
            state.todos.map((item) => {
                return item.id === payload.todoId ?
                    { ...item, categories_ids: [...item.categories_ids, payload.categoryId] } : item
            })
        },

        deleteTodoCategory: (state, { payload }: PayloadAction<{todoId: string, categoryId: string}>) => {
            state.todos.map((item) => {
                if (item.id === payload.todoId) {
                    const newListOfCategories = item.categories_ids.filter((item) => {
                        return item !== payload.categoryId
                    })

                    return { ...item, categories_ids: newListOfCategories }
                }

                return item
            })
        }
    }
})

export const {
    addTodo,
    deleteTodo,
    toggleTodoIsBlocked,
    toggleTodoIsDone,
    addTodoCategory,
    deleteTodoCategory
} = todoSlice.actions

export default todoSlice.reducer