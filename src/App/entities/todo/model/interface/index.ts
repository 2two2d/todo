interface ITodo {
  id: string
  text: string
  isDone: boolean
  isBlocked: boolean
  categoryArrIds?: string[]
}

type ITodoCreatePort = Pick<ITodo, 'text' | 'categoryArrIds'>

export type {
  ITodo,
  ITodoCreatePort
}
