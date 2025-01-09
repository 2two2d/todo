'use client'

import { Button, ModalActions } from 'ipst-ui-kit'

import { useRouter } from 'next/navigation'

import { useModalState } from '@shared/lib/store'

import { useClientTranslation } from '@shared/lib/i18n/clientComponent'

import HeaderToModal from '@shared/ui/header-to-modal'

import { ELocalStorageValues } from '@shared/service/local-storage-service/interfaces'

import { handNavigateToNoAbsoluteRoute } from '@shared/utils/route-handle'

import CustomModal from '@shared/ui/custom-modal'

import type { ModalKeys } from '@shared/utils/enums'

import type { ReactNode } from 'react'

import type { ILang, IParams } from '@shared/interface/helper-interface'

export default function ModalAddEditCancelCreation ({ params: { lng, header, key }}:
IParams<ILang & { header: string; key: ModalKeys }>): ReactNode {
  const { t, } = useClientTranslation(lng, ['shared', 'create-add-page'])
  const isModalOpen = useModalState((state) => state.isModalOpen(key))

  const router = useRouter()
  const closeModal = useModalState((state) => state.closeModal)

  const onCloseCancelCreationModal = (): void => {
    closeModal(key)
  }
  const handleCloseCancelCreationModal = onCloseCancelCreationModal

  const handleConfirm = (): void => {
    const path = sessionStorage.getItem(ELocalStorageValues.pathBeforeCreate) ?? ''
    router.replace(handNavigateToNoAbsoluteRoute(lng, path))
    sessionStorage.removeItem(ELocalStorageValues.pathBeforeCreate)
    handleCloseCancelCreationModal()
  }

  return (
    <CustomModal
      isOpen={ isModalOpen }
      onClose={ handleCloseCancelCreationModal }
    >
      <HeaderToModal handleCloseModal={ onCloseCancelCreationModal }
        headerText={ t(header) }
        additionalText={ t('При совершении действия внесенные изменения не сохранятся') }
      />

      <ModalActions>
        <Button
          variant="outlined"
          className="w-full"
          onClick={ handleCloseCancelCreationModal }
        >
          { t('Кнопки.Отмена') }
        </Button>

        <Button
          onClick={ handleConfirm }
          className="w-full"
        >
          { t('Кнопки.Подтвердить') }
        </Button>
      </ModalActions>

    </CustomModal>

  )
}
