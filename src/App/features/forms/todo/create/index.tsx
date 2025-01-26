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
      <FormLayout handleSubmit={ onSubmit } formId="todo-create" className="!w-full !flex-row !items-center justify-evenly !py-4">
        <ControlledTextField
          name={ form.register('text').name }
          placeholder="Что планируете сделать?"
        />

        <ControlledSelect
          name={ form.register('categoryArrIds').name }
          options={ selectOptions }
          value={ [selectOptions[0]?.value ?? 'Здесь пока нет категорий'] }
          isMultiple={ true }
          placeholder="Категории"
          emptyMessage="Категорий пока нет"
        />
      </FormLayout>
    </FormProvider>
  )
}

export default CreateTodoForm
