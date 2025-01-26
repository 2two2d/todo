import { type ReactNode, useEffect } from 'react'

import { useModalState } from '@shared/lib/modal/utils/use-modal-state'
import { AttachCategoryModal, CreateCategoryModal } from '@features/render-modal/modals/category'

import { EModalKeys } from '../../../shared/enum/modal-keys'

import type { IAttachCategoryModalProps } from '@features/render-modal/modals/category/attach'

interface IGetModalsProps {
  currentModalKey: EModalKeys
}

const RenderModal = ({ currentModalKey }: IGetModalsProps): ReactNode => {
  const { isModalOpen, modalState } = useModalState()

  const isOpen = isModalOpen({ key: currentModalKey })

  useEffect(() => {
    if (!isOpen) {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }
  }, [isModalOpen])

  const modals = {
    [EModalKeys.CreateCategory]: isOpen && <CreateCategoryModal />,
    [EModalKeys.AttachCategory]: isOpen && <AttachCategoryModal options={ modalState.modals[currentModalKey].options as IAttachCategoryModalProps['options'] } />
  }

  return modals[currentModalKey as keyof typeof modals]
}

export { RenderModal }
