interface ICategory {
  id: string
  name: string
  color: string
}

type ICategoryCreatePort = Omit<ICategory, 'id'>

export type {
  ICategory,
  ICategoryCreatePort
}
