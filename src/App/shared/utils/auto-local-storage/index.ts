import type { ILocalStorage } from '@shared/utils/auto-local-storage/abstract-class'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class LocalStorage implements ILocalStorage {

  public static setItem = (key: string, value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  public static getItem = <T>(key: string): T => {
    return JSON.parse(localStorage.getItem(key) ?? '') as T
  }

}

const LocalStorageSingleton = new LocalStorage()

export {
  LocalStorageSingleton
}
