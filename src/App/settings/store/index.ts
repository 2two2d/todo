import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "@entities/todo/model/slice";
import categoryReducer from "@entities/category/model/slice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        category: categoryReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch