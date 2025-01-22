// eslint-disable-next-line @typescript-eslint/no-extraneous-class
abstract class ILocalStorage {

  public static setItem: (key: string, value: unknown) => void

  public static getItem: <T>(key: string) => T

}

export {
  ILocalStorage
}
