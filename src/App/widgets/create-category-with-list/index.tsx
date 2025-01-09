import CreateCategoryForm from '@features/forms/category/create'

import { useCategoryCreatePresenter } from '@entities/category/model'
import CategoriesList from '@features/categories-list'

import { makeClassname } from '@shared/utils'

import type { IDetailedProps } from '@shared/interface'

import type { ReactElement } from 'react'

type ICreateCategoryWithListProps = IDetailedProps<HTMLDivElement>

const CreateCategoryWithList = ({ className, ...props }: ICreateCategoryWithListProps): ReactElement => {
  const { form, handleSubmit } = useCategoryCreatePresenter()

  return (
    <div className={ makeClassname('flex flex-col gap-2', className) } { ...props }>
      <CreateCategoryForm form={ form } onSubmit={ handleSubmit } />

      <CategoriesList />
    </div>
  )
}

export default CreateCategoryWithList
