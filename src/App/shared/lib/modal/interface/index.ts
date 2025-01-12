import type { EModalKeys } from '@shared/enum'

interface IModalAction {
  key: EModalKeys
}

interface IModalActionWithOptions<T extends object> extends IModalAction {
  options?: T
}

export type {
  IModalAction,
  IModalActionWithOptions
}
