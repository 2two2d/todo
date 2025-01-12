import { type ReactNode, useEffect } from 'react'

import { EModalKeys } from '@shared/enum'
import { useModalState } from '@shared/lib/modal/utils/use-modal-state'
import CreateCategoryModal from '@features/render-modal/modals/category/create'

interface IGetModalsProps {
  currentModalKey: EModalKeys
  options?: object
}

const RenderModal = ({ currentModalKey }: IGetModalsProps): ReactNode => {
  const { isModalOpen } = useModalState()

  const isOpen = isModalOpen({ key: currentModalKey })

  useEffect(() => {
    if (!isOpen) {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }
  }, [isModalOpen])

  const modals = {
    [EModalKeys.CreateCategory]: isOpen && <CreateCategoryModal />
  }

  return modals[currentModalKey as keyof typeof modals]
}

export { RenderModal }
