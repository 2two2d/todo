import type { IParams, ILang } from '@shared/interface/helper-interface'

import type { ModalKeys } from '@shared/utils/enums'

interface IGetModalsFuncProps extends IParams<ILang> {
  currentModalKey: ModalKeys
}

export type {
  IGetModalsFuncProps
}
