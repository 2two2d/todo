import { combineReducers, configureStore } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'

import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'

import { TodoSlice } from '@entities/todo/model/slice'

import { CategorySlice } from '@entities/category/model/slice'
import { ModalSlice } from '@shared/lib/modal/store'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  /* entities */
  todo: TodoSlice.reducer,
  category: CategorySlice.reducer,

  /* lib */
  modal: ModalSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        PERSIST,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PURGE,
        REGISTER
      ],
    },
  }),
})

const Persistor = persistStore(Store)

type RootState = ReturnType<typeof Store.getState>

type AppDispatch = typeof Store.dispatch

export {
  Store,
  Persistor,
  type RootState,
  type AppDispatch,
}
