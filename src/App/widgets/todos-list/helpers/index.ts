import { ESearchParamsValues } from '@shared/enum/search-params-values'
import { isTruthy } from '@shared/utils'

import type { ITodo } from '@entities/todo/model'

interface IFilterTodos {
  todos: ITodo[]
  filterKey?: ESearchParamsValues
}

const filterTodos = ({ todos, filterKey }: IFilterTodos): ITodo[] => {
  if (isTruthy(filterKey)) {
    switch (filterKey) {
      case ESearchParamsValues.COMPLETED:
        todos = todos.filter((item) => item.isCompleted)
        break
      case ESearchParamsValues.NOT_COMPLETED:
        todos = todos.filter((item) => !item.isCompleted)
        break
      case ESearchParamsValues.DISABLED:
        todos = todos.filter((item) => item.isBlocked)
        break
      case ESearchParamsValues.ALL:
        break
      default:
        break
    }
  }

  return todos
}

export {
  filterTodos
}
