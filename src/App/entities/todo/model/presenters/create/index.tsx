import { useForm, type UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { enqueueSnackbar } from 'notistack'

import { useMemo } from 'react'

import { todoCreateSchema } from '@entities/todo/model/schemas/create'

import { useActions } from '@settings/store/utils/use-actions'

import { useDoesTodoExist, useGetCategories } from '@settings/store/utils/selectors'

import CategoryBadge from '@entities/category/ui/category-badge'

import type { BaseSyntheticEvent } from 'react'
import type { ITodoCreatePort } from '@entities/todo/model'
import type { ISelectOption } from '@shared/ui/components/input'

interface IUseTodoCreatePresenterReturn {
  form: UseFormReturn<ITodoCreatePort>
  selectOptions: ISelectOption[]

  handleSubmit(e?: BaseSyntheticEvent | undefined): Promise<void>
}

const useTodoCreatePresenter = (): IUseTodoCreatePresenterReturn => {
  const form = useForm({
    resolver: yupResolver<ITodoCreatePort>(todoCreateSchema())
  })

  const categories = useGetCategories()

  const { addTodo } = useActions()

  const doesTodoExist = useDoesTodoExist()

  const handleSuccess = (): void => {
    enqueueSnackbar(
      'Новая задача была успешно добавлена!',
      {
        variant: 'success'
      }
    )
  }

  const handleSubmit = form.handleSubmit((data): void => {
    if (doesTodoExist(data)) {
      enqueueSnackbar(
        'Такая задача уже существует!',
        {
          variant: 'error'
        }
      )
      return
    }

    addTodo(data)
    handleSuccess()
  })

  const selectOptions: ISelectOption[] = useMemo(() => {
    return categories.map((item) => {
      return {
        label: <CategoryBadge category={ item } />,
        value: item.id
      }
    })
  }, [categories])

  return {
    form,
    handleSubmit,
    selectOptions
  }
}

export {
  useTodoCreatePresenter
}
