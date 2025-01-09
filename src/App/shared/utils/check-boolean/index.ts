type IFalsy = '' | false | null | undefined

const falsy = <T>(x: T, isNum: boolean = true): x is T & IFalsy => x === false ||
    x === null ||
    x === undefined ||
    x === '' ||
    Array.isArray(x) && x.length === 0 ||
    isNum && x === 0

const truthy = <T>(x: T): x is Exclude<T, IFalsy> => !falsy(x)

export { truthy, falsy }
