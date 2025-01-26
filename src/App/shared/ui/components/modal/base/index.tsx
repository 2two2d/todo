import { forwardRef, useEffect, useRef } from 'react'

import { mergeRefs } from 'react-merge-refs'

import { createPortal } from 'react-dom'

import style from './index.module.scss'

import type { ForwardedRef, MouseEvent, PropsWithChildren, ReactNode } from 'react'

interface IModalProps extends PropsWithChildren {
  id?: string
  className?: string
  isOpen: boolean

  onClose(e?: MouseEvent): void
}

const ModalRenderFunction = ({
  className,
  isOpen,
  onClose: handleOnClose,
  children,
  ...rest
}: IModalProps, ref: ForwardedRef<HTMLDivElement>): ReactNode | null => {
  const refModal = useRef<HTMLDivElement | null>(null)
  const refModalContent = useRef<HTMLDivElement | null>(null)

  const handleOnPressEscape = (e: KeyboardEvent): void => {
    if (e.code === 'Escape') handleOnClose()
  }

  useEffect(() => {
    document.addEventListener('keyup', handleOnPressEscape)
    return () => {
      document.removeEventListener('keyup', handleOnPressEscape)
    }
  }, [handleOnClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleOnPreventClick = (e: MouseEvent): void => {
    e.stopPropagation()
  }

  return createPortal(
    (
      <div
        ref={ mergeRefs([refModal, ref]) }
        className={ `${style.common} ${className}` }
        onClick={ handleOnClose }
        { ...rest }
      >
        <div onClick={ handleOnPreventClick } className={ style.dialog }>
          <div ref={ refModalContent } className={ style.content }>
            { children }
          </div>
        </div>
      </div>
    ),
    document.body
  )
}

const CustomModal = forwardRef(ModalRenderFunction)
export { CustomModal }
