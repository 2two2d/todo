import { useSetPageTitle } from '@shared/utils/set-title'

import { useTodoCreatePresenter } from '@entities/todo/model'

import CreateTodoForm from '@features/forms/todo/create'

import Button from '@shared/ui/components/button'

import type { IPageProps } from '@shared/interface'
import type { ReactNode } from 'react'

const ViewTodosPage = (props: IPageProps): ReactNode => {
  useSetPageTitle(props.title)

  const { form, selectOptions, handleSubmit } = useTodoCreatePresenter()

  return (
    <div className="flex flex-col gap-2 justify-between">
      <CreateTodoForm form={ form }
        selectOptions={ selectOptions }
        onSubmit={ handleSubmit }
      />

      <div>
        <Button buttonText="Добавить категорию" className="!w-[220px]" icon="add" />
      </div>
    </div>
  )
}

export default ViewTodosPage
