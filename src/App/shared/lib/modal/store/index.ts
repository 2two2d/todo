import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { produce } from 'immer'

import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

import type { ModalKeys } from '@shared/utils/enums'

const useModalState = create<TModalState>()(devtools(
  (set, get) => ({
    modals: {},
    openModal: (key, options): void => {
      set(
        produce((draft: TModalState) => {
          draft.modals[key] = { ...draft.modals[key], isOpen: true, options } as IModalItemState<typeof options>
        }),
        false,
        {
          type: 'useModalState => openModal',
        },
      )
    },
    closeModal: (key): void => {
      set(
        produce((draft: TModalState): void => {
          draft.modals[key] = { ...draft.modals[key], isOpen: false, options: null } as IModalItemState<null>
        }),
        false,
        {
          type: 'useModalState => closeModal',
        },
      )
    },
    isModalOpen: (key): boolean => Boolean(get().modals[key]?.isOpen),
    getModal: <T>(key: ModalKeys): IModalItemState<T> => get().modals[key] as IModalItemState<T>,
    getModals: (): {
      [key: string]: IModalItemState<unknown>
    } => get().modals,
  }),
  {
    name: 'useModalState',
    anonymousActionType: 'useModalState action',
  },
),)

interface IModalItemState<T> {
  key: string
  options: T
  isOpen: boolean
}

interface IModalSLiceState {
  modals: {
    [key: string]: IModalItemState<unknown>
  }
}

const initialState: IModalSLiceState = {
  modals: {}
}

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: <T>(state: IModalSLiceState, { payload }: PayloadAction<{ key: string; options: T }>) => {
      const { key, options } = payload

      state.modals[key] = { ...state.modals[key], isOpen: true, options } as IModalItemState<typeof options>
    },

    closeModal: (state, { payload }: PayloadAction<{ key: string }>) => {
      const { key } = payload

      state.modals[key] = { ...state.modals[key], isOpen: false, options: null } as IModalItemState<null>
    }
  }
})

export { useModalState }
