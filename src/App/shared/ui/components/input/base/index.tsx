import { forwardRef } from 'react'

import { makeClassname } from '@shared/utils'

import styles from './index.module.scss'

import type { ForwardRefRenderFunction, ReactNode } from 'react'

import type { IInputProps } from '@shared/ui/components/input'

const BaseInputRenderFunction: ForwardRefRenderFunction<
HTMLInputElement,
IInputProps
> = ({
  icon,
  iconPosition = undefined,
  inputSize = 'medium',
  borderRadius = 'medium',
  isError = false,
  isUpperCase = false,
  placeholder,
  id = crypto.randomUUID(),
  inputClassName,
  className,
  ...props
}, ref): ReactNode => {
  const inputProps = {
    ref,
    id,
    icon,
    placeholder,
    ...props
  }

  const inputClass = makeClassname(
    styles.input,
    styles[`input--${inputSize}`],
    isError && 'border-input-error',
    styles[`input-icon-${iconPosition}`],
    isUpperCase && styles['input-uppercase'],
    styles[`input-rounded-${borderRadius}`],
    inputClassName
  )

  return (
    <div className={ makeClassname(styles.wrapper, className) }>
      <div className={ makeClassname(styles.content) }>
        { (iconPosition === 'start' || iconPosition === 'color') && (
          <div className={ makeClassname(styles.icon, styles[iconPosition]) }>
            { icon }
          </div>
        ) }

        <input { ...inputProps } className={ inputClass } />

        { iconPosition === 'end' && (
          <div className={ makeClassname(styles.icon, styles[iconPosition]) }>
            { icon }
          </div>
        ) }
      </div>
    </div>
  )
}

const BaseInput = forwardRef(BaseInputRenderFunction)

export { BaseInput }
