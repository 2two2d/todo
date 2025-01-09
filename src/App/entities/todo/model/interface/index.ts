interface ITodo {
  id: string
  text: string
  is_done: boolean
  is_blocked: boolean
  categories_ids?: string[]
}

type ITodoCreatePort = Pick<ITodo, 'text' | 'categories_ids'>

export type {
  ITodo,
  ITodoCreatePort
}
