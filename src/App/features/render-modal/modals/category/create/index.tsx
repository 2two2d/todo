import { enqueueSnackbar } from 'notistack'

import { useModalState } from '@shared/lib/modal/utils/use-modal-state'

import { CustomModal, ModalTitle } from '@shared/ui/components/modal'

import { EModalKeys } from '@shared/enum'

import CreateCategoryForm from '@features/forms/category/create'

import { useCategoryCreatePresenter } from '@entities/category/model'

import CategoriesList from '@features/categories-list'

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

  const { form, handleSubmit } = useCategoryCreatePresenter(handleCreateSuccess)

  return (
    <CustomModal isOpen={ isOpen } onClose={ handleCloseModal }>
      <ModalTitle title="Создать новую категорию" handleCloseModal={ onCloseModal } />

      <CreateCategoryForm form={ form } onSubmit={ handleSubmit } className="!shadow-none !p-0" />

      <CategoriesList />
    </CustomModal>
  )
}

export default CreateCategoryModal
