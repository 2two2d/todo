import { forwardRef, useMemo } from 'react'

import { v4 as uuid } from 'uuid'

import { BaseInput } from '@shared/ui/components/input'
import { makeClassname } from '@shared/utils'

import type { ITextFieldProps } from '@shared/ui/components/input'
import type { ForwardRefRenderFunction, ReactNode } from 'react'

const TextFieldRenderFunction: ForwardRefRenderFunction<
HTMLInputElement,
ITextFieldProps
> = (props, ref): ReactNode => {
  const {
    error,
    isError = false,
    id: externalId,
    className,
    value,
    ...rest
  } = props

  const id = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return externalId ?? `text-field--${uuid()}`
  }, [externalId])

  return (
    <div className={ makeClassname('relative', className) }>
      <BaseInput
        { ...rest }
        id={ id }
        ref={ ref }
        value={ value }
        isError={ isError }
      />

      { isError && error !== null &&
        <span className="absolute ml-1 text-[14px] text-text-validation-text">{ error }</span> }
    </div>
  )
}

const TextField = forwardRef(TextFieldRenderFunction)

export { TextField }
