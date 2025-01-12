import Icon from '@shared/ui/components/icon'

import classname from './index.module.scss'

import type { HTMLAttributes, ReactNode } from 'react'

interface IModalTitleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode
  isShowCloseIcon?: boolean

  handleCloseModal?(): void
}

const ModalTitle = ({
  title,
  isShowCloseIcon = true,
  handleCloseModal,
  className,
  ...rest
}: IModalTitleProps): ReactNode => {
  return (
    <div className={ `${className} ${classname['modal-title']}` } { ...rest }>
      <h2 className={ classname['modal-title-headline'] }>{ title }</h2>

      { isShowCloseIcon && (
        <button type="button" className={ classname['modal-title-close-btn'] } onClick={ handleCloseModal }>
          <Icon source="cross" size={ 1.2 } />
        </button>
      ) }
    </div>
  )
}

export { ModalTitle }
