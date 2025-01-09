import { configureStore } from '@reduxjs/toolkit'

import { TodoSlice } from '@entities/todo/model/slice'
import { CategorySlice } from '@entities/category/model/slice'

const Store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
    category: CategorySlice.reducer
  }
})

type RootState = ReturnType<typeof Store.getState>

type AppDispatch = typeof Store.dispatch

export {
  Store,
  type RootState,
  type AppDispatch
}
