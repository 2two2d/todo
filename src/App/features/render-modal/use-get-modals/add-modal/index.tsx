import { useModalState } from '@shared/lib/store'
import { ModalKeys } from '@shared/utils/enums'

import ModalAddEditCancelCreation from '../../modals/add'

import type { IGetModalsFuncProps } from '../../interface'

export const useGetAddModals = ({ currentModalKey, params }: IGetModalsFuncProps):
Record<string, JSX.Element | false> => {
  const { isModalOpen } = useModalState((state) => {
    return {
      isModalOpen: state.isModalOpen(currentModalKey),
      modalProps: state.modals[currentModalKey]
    }
  })

  return {
    [ModalKeys.ModalCancelAddCreation]: isModalOpen && (
      <ModalAddEditCancelCreation
        params={{
          ...params,
          header: 'Вы действительно хотите прервать создание объявления?',
          key: ModalKeys.ModalCancelAddCreation
        }}
      />
    ),
  }
}
