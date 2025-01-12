import { configureStore } from '@reduxjs/toolkit'

import { TodoSlice } from '@entities/todo/model/slice'
import { CategorySlice } from '@entities/category/model/slice'
import { ModalSlice } from '@shared/lib/modal/store'

const Store = configureStore({
  reducer: {
    /* entities */
    todo: TodoSlice.reducer,
    category: CategorySlice.reducer,

    /* lib */
    modal: ModalSlice.reducer
  }
})

type RootState = ReturnType<typeof Store.getState>

type AppDispatch = typeof Store.dispatch

export {
  Store,
  type RootState,
  type AppDispatch
}
