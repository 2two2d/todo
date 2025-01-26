import { makeClassname } from '@shared/utils'
import Button from '@shared/ui/components/button'

import style from './index.module.scss'

import type { BaseSyntheticEvent, PropsWithChildren, ReactNode } from 'react'

interface ILayoutProps extends PropsWithChildren {
  formId?: string
  buttonText?: string
  className?: string

  handleSubmit(e?: BaseSyntheticEvent | undefined): Promise<void>
}

const FormLayout = ({ children, handleSubmit, className, buttonText = 'Создать', formId }: ILayoutProps): ReactNode => {
  return (
    <form onSubmit={ handleSubmit }
      className={ makeClassname('paper', style.common, className) }
      id={ formId }
    >
      { children }

      <Button buttonText={ buttonText }
        icon="add"
        type="submit"
      />
    </form>
  )
}

export default FormLayout
