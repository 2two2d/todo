import { FormProvider } from 'react-hook-form'

import FormLayout from '@features/forms/layout'

import { ControlledTextField } from '@shared/ui/components/input/controlled/text-field'
import { ColorInputControlled } from '@shared/ui/components/input/controlled/color-input'
import { generateHex } from '@shared/utils/generate-hex'

import type { IDetailedProps } from '@shared/interface'

import type { ICategoryCreatePort } from '@entities/category/model'
import type { BaseSyntheticEvent, ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'

interface ICreateCategoryFormProps extends Omit<IDetailedProps<HTMLDivElement>, 'form'> {
  form: UseFormReturn<ICategoryCreatePort>

  onSubmit(e?: BaseSyntheticEvent | undefined): Promise<void>
}

const CreateCategoryForm = ({ form, onSubmit, className, ...props }: ICreateCategoryFormProps): ReactNode => {
  return (
    <FormProvider { ...form }>
      <FormLayout handleSubmit={ onSubmit }
        formId="category-create"
        className={ className }
        { ...props }
      >
        <ControlledTextField
          name={ form.register('name').name }
          placeholder="Название"
        />

        <ColorInputControlled
          name={ form.register('color').name }
          defaultValue={ generateHex() }
        />
      </FormLayout>
    </FormProvider>
  )
}

export default CreateCategoryForm
