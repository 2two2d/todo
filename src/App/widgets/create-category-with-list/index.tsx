import CreateCategoryForm from '@features/forms/category/create'

import CategoriesList from '@features/categories-list'

import { makeClassname } from '@shared/utils'

import { useCategoryCreatePresenter } from '@features/presenters/todo'

import type { IDetailedProps } from '@shared/interface'

import type { ReactElement } from 'react'

interface ICreateCategoryWithListProps extends IDetailedProps<HTMLDivElement> {
  formClassName?: string

  onSuccess?(): void
}

const CreateCategoryWithList = ({
  className,
  formClassName,
  onSuccess,
  ...props }: ICreateCategoryWithListProps): ReactElement => {
  const { form, handleSubmit } = useCategoryCreatePresenter(onSuccess)

  return (
    <div className={ makeClassname('flex flex-col gap-2', className) } { ...props }>
      <CreateCategoryForm form={ form } onSubmit={ handleSubmit } className={ formClassName } />

      <CategoriesList />
    </div>
  )
}

export default CreateCategoryWithList
