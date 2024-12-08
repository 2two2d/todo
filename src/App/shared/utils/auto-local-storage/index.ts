abstract class ILocalStorage {
    public static setItem: (key: string, value: any) => void

    public static getItem: <T>(key: string) => T
}

class LocalStorage implements ILocalStorage{
    public static setItem = (key: string, value: any): void => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    public static getItem = <T>(key: string) => {
        return JSON.parse(localStorage.getItem(key) ?? '') as T
    }
}

export default new LocalStorage()