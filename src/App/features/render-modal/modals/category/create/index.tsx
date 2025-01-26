import { enqueueSnackbar } from 'notistack'

import { useModalState } from '@shared/lib/modal/utils/use-modal-state'

import { CustomModal, ModalTitle } from '@shared/ui/components/modal'

import CreateCategoryWithList from '@widgets/create-category-with-list'

import { EModalKeys } from '../../../../../shared/enum'

import type { ReactNode } from 'react'

const MODAL_KEY = EModalKeys.CreateCategory

const CreateCategoryModal = (): ReactNode => {
  const { isModalOpen, closeModal } = useModalState()

  const isOpen = isModalOpen({ key: MODAL_KEY })

  const handleCloseModal = (): void => {
    closeModal(MODAL_KEY)
  }

  const onCloseModal = handleCloseModal

  const handleCreateSuccess = (): void => {
    enqueueSnackbar(
      'Новая категория была успешно создана!',
      {
        variant: 'success'
      }
    )
    closeModal(MODAL_KEY)
  }

  return (
    <CustomModal isOpen={ isOpen } onClose={ handleCloseModal }>
      <ModalTitle title="Создать новую категорию" handleCloseModal={ onCloseModal } />

      <CreateCategoryWithList onSuccess={ handleCreateSuccess } formClassName="!shadow-none !p-0" />
    </CustomModal>
  )
}

export default CreateCategoryModal
