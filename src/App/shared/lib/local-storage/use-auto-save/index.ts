import { useEffect } from 'react'

import { LocalStorage } from '@shared/lib/local-storage/auto-local-storage'

import type { Dispatch, SetStateAction } from 'react'

import type { NotOfType } from '@shared/interface'

import type { ELocalStorageKeys } from '@shared/enum/storage-keys'

interface IUseAutoSaveProps<T> {
  state: T
  setState: Dispatch<SetStateAction<T>>
  storageKey: ELocalStorageKeys
}

const useAutoSave = <T>({ state, setState, storageKey }: IUseAutoSaveProps<NotOfType<T, null>>): void => {
  useEffect(() => {
    const storageState = LocalStorage.getItem<NotOfType<T, null>>(storageKey)

    if (storageState !== null) setState(storageState)

    return () => {
      LocalStorage.setItem(storageKey, state)
    }
  }, [])
}

export {
  useAutoSave
}
