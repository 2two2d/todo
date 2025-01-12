import { useDispatch, useSelector } from 'react-redux'

import { ModalSlice } from '../../store'

import type { RootState } from '@settings/store'
import type { IModalAction, IModalActionWithOptions } from '../../interface'

interface IUseModalStateReturn {
  openModal<T extends object>(key: IModalAction['key'], options?: IModalActionWithOptions<T>['options']): void

  closeModal(key: IModalAction['key']): void

  isModalOpen(payload: IModalAction): boolean
}

const useModalState = (): IUseModalStateReturn => {
  const dispatch = useDispatch()

  const modalState = useSelector((state: RootState) => state.modal)

  const actions = ModalSlice.actions

  const selectors = ModalSlice.selectors

  const openModal = <T extends object>(key: IModalAction['key'], options: IModalActionWithOptions<T>['options']): void => {
    dispatch(actions.openModal({ key, options }))
  }

  const closeModal = (key: IModalAction['key']): void => {
    dispatch(actions.closeModal({ key }))
  }

  const isModalOpen = (payload: IModalAction): boolean => {
    return selectors.isModalOpen({ modal: modalState }, { payload, type: 'query' })
  }

  return {
    openModal,
    closeModal,
    isModalOpen
  }
}

export {
  useModalState
}
