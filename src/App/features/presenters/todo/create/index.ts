import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { enqueueSnackbar } from 'notistack'

import { categoryCreateSchema } from '@entities/category/model/schemas/create'

import { useActions } from '@settings/store/utils/use-actions'

import { MAX_CATEGORIES } from '@entities/category/model'

import { useDoesCategoryExist, useGetCategories } from '@entities/category/selectors'

import type { ICategoryCreatePort } from '@entities/category/model'

import type { BaseSyntheticEvent } from 'react'

import type { UseFormReturn } from 'react-hook-form'

interface IUseCategoryCreatePresenterReturn {
  form: UseFormReturn<ICategoryCreatePort>

  handleSubmit(e?: BaseSyntheticEvent | undefined): Promise<void>
}

export const useCategoryCreatePresenter =
(onSuccess?: () => void): IUseCategoryCreatePresenterReturn => {
  const form = useForm({
    resolver: yupResolver<ICategoryCreatePort>(categoryCreateSchema())
  })

  const { addCategory } = useActions()

  const categories = useGetCategories()

  const doesCategoryExist = useDoesCategoryExist()

  const handleSubmit = form.handleSubmit((data): void => {
    if (doesCategoryExist(data)) {
      enqueueSnackbar(
        'Категория с таким названием и цветом уже существует!',
        {
          variant: 'error'
        }
      )
      return
    }

    if (categories.length === MAX_CATEGORIES) {
      enqueueSnackbar(
        'Вы создали максимальное количество категорий!',
        {
          variant: 'error'
        }
      )
      return
    }

    addCategory(data)
    onSuccess && onSuccess()
  })

  return {
    form,
    handleSubmit
  }
}
