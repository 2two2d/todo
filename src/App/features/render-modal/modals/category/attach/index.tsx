import { useModalState } from '@shared/lib/modal/utils/use-modal-state'

import { CustomModal, ModalTitle } from '@shared/ui/components/modal'

import CategoriesList from '@features/categories-list'

import { ECategoryActions } from '@entities/category/model/enum'

import { EModalKeys } from '../../../../../shared/enum'

import type { ReactNode } from 'react'

const MODAL_KEY = EModalKeys.AttachCategory

interface IAttachCategoryModalProps {
  options: {
    todoId: string
  }
}

const AttachCategoryModal = ({ options }: IAttachCategoryModalProps): ReactNode => {
  const { isModalOpen, closeModal } = useModalState()

  const isOpen = isModalOpen({ key: MODAL_KEY })

  const handleCloseModal = (): void => {
    closeModal(MODAL_KEY)
  }

  const onCloseModal = handleCloseModal

  const todoId = options.todoId

  return (
    <CustomModal isOpen={ isOpen } onClose={ handleCloseModal }>
      <ModalTitle title="Прикрепить новую категорию" handleCloseModal={ onCloseModal } />

      <CategoriesList todoId={ todoId } actions={ ECategoryActions.ATTACH } onAction={ handleCloseModal } />
    </CustomModal>
  )
}

export default AttachCategoryModal

export type {
  IAttachCategoryModalProps
}
