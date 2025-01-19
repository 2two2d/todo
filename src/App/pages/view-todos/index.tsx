import { useSetPageTitle } from '@shared/utils/set-title'

import { useTodoCreatePresenter } from '@entities/todo/model'

import CreateTodoForm from '@features/forms/todo/create'

import Button from '@shared/ui/components/button'

import { RenderModal } from '@features/render-modal'

import { EModalKeys } from '@shared/enum'

import { useModalState } from '@shared/lib/modal/utils/use-modal-state'

import TodosList from '@features/todos-list'

import type { IPageProps } from '@shared/interface'
import type { ReactNode } from 'react'

const ViewTodosPage = (props: IPageProps): ReactNode => {
  useSetPageTitle(props.title)

  const { form, selectOptions, handleSubmit } = useTodoCreatePresenter()

  const { openModal } = useModalState()

  const handleOpenCreateCategoryModal = (): void => {
    openModal(EModalKeys.CreateCategory)
  }

  return (
    <div className="flex flex-col gap-2 justify-between items-center">
      <CreateTodoForm form={ form }
        selectOptions={ selectOptions }
        onSubmit={ handleSubmit }
      />

      <div className="w-[800px]">
        <Button buttonText="Добавить категорию"
          className="!w-[220px]"
          icon="add"
          onClick={ handleOpenCreateCategoryModal }
        />
      </div>

      <TodosList className="mt-4" />

      <RenderModal currentModalKey={ EModalKeys.CreateCategory } />
    </div>
  )
}

export default ViewTodosPage
