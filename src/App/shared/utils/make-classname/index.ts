type Classname = string | undefined | null | boolean

export const makeClassname = (...classNames: Classname[]): string => {
  return classNames.filter((item) => typeof item === 'string').join(' ')
}
