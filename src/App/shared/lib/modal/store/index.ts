import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

import type { IModalAction, IModalActionWithOptions } from '../interface'

interface IModalItemState<T> {
  key: string
  options: T
  isOpen: boolean
}

interface IModalSliceState {
  modals: {
    [key: string]: IModalItemState<unknown>
  }
}

const initialState: IModalSliceState = {
  modals: {}
}

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: <T extends object>(state: IModalSliceState, { payload }: PayloadAction<IModalActionWithOptions<T>>) => {
      const { key, options } = payload

      state.modals[key] = { ...state.modals[key], isOpen: true, options } as IModalItemState<typeof options>
    },

    closeModal: (state, { payload }: PayloadAction<IModalAction>) => {
      const { key } = payload

      state.modals[key] = { ...state.modals[key], isOpen: false, options: null } as IModalItemState<null>
    }
  },
  selectors: {
    isModalOpen: (state, { payload }: PayloadAction<IModalAction>) => {
      const { key } = payload

      return state.modals[key]?.isOpen
    }
  }
})

export { ModalSlice }

export type {
  IModalSliceState
}
