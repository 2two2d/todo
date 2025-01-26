import { useSetPageTitle } from '@shared/utils/set-title'

import CreateTodoForm from '@features/forms/todo/create'

import Button from '@shared/ui/components/button'

import { RenderModal } from '@features/render-modal'

import { useModalState } from '@shared/lib/modal/utils/use-modal-state'

import TodosFilter from '@features/filter/todo'

import { useTodoCreatePresenter } from '@features/presenters/category'

import { EModalKeys } from '@shared/enum'

import TodosList from '@widgets/todos-list'

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
    <div className="flex flex-col gap-3 justify-between items-center">
      <CreateTodoForm form={ form }
        selectOptions={ selectOptions }
        onSubmit={ handleSubmit }
      />

      <div className="w-[800px] flex justify-between">
        <Button buttonText="Добавить категорию"
          className="!w-[220px]"
          icon="add"
          onClick={ handleOpenCreateCategoryModal }
        />

        <TodosFilter />
      </div>

      <TodosList className="mt-4" />

      <RenderModal currentModalKey={ EModalKeys.CreateCategory } />

      <RenderModal currentModalKey={ EModalKeys.AttachCategory } />
    </div>
  )
}

export default ViewTodosPage
