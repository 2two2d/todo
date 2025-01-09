import { FormProvider } from 'react-hook-form'

import FormLayout from '@features/forms/layout'

import { ControlledTextField } from '@shared/ui/components/input/controlled/text-field'

import { ControlledSelect } from '@shared/ui/components/input/controlled/select-input'

import type { UseFormReturn } from 'react-hook-form'

import type { ISelectOption } from '@shared/ui/components/input'

import type { ITodoCreatePort } from '@entities/todo/model'

import type { BaseSyntheticEvent, ReactNode } from 'react'

interface ICreateCategoryFormProps {
  form: UseFormReturn<ITodoCreatePort>
  selectOptions: ISelectOption[]

  onSubmit(e?: BaseSyntheticEvent | undefined): Promise<void>
}

const CreateTodoForm = ({ form, selectOptions, onSubmit }: ICreateCategoryFormProps): ReactNode => {
  return (
    <FormProvider { ...form }>
      <FormLayout handleSubmit={ onSubmit } formId="todo-create" className="!flex-row !w-full !items-center !p-5">
        <ControlledTextField
          name={ form.register('text').name }
          placeholder="Что планируете сделать?"
        />

        <ControlledSelect
          name={ form.register('categories_ids').name }
          options={ selectOptions }
          value={ selectOptions[0]?.value ?? '' }
        />
      </FormLayout>
    </FormProvider>
  )
}

export default CreateTodoForm
