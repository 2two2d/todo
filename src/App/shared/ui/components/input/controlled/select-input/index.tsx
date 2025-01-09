import { forwardRef } from 'react'

import { Controller, useFormContext } from 'react-hook-form'

import Select from '../../select'

import type { ForwardRefRenderFunction, ReactElement, ReactNode } from 'react'

import type { ISelectControlledProps } from '@shared/ui/components/input/interface'

const ControlledSelectInputRenderFunction: ForwardRefRenderFunction<
HTMLInputElement, ISelectControlledProps> = (props, ref): ReactNode => {
  const {
    name,
    ...otherProps
  } = props

  const { control } = useFormContext()

  return (
    <Controller name={ name }
      control={ control }
      render={ ({ field: { value, onChange: handleChange }, fieldState: { error }}): ReactElement => {
        return (
          <Select
            { ...otherProps }
            value={ value as string }
            onChange={ handleChange }
            isError={ error !== undefined }
            error={ error?.message }
            ref={ ref }
          />
        )
      } }
    />
  )
}

const ControlledSelect = forwardRef(ControlledSelectInputRenderFunction)

export { ControlledSelect }
