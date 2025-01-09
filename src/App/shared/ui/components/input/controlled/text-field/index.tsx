import { forwardRef } from 'react'

import { Controller, useFormContext } from 'react-hook-form'

import { TextField } from '@shared/ui/components/input/text-field'

import type { ChangeEvent, ForwardRefRenderFunction, ReactElement, ReactNode } from 'react'

import type { IControlledTextFieldProps } from '@shared/ui/components/input/interface'

const ControlledTextFieldRenderFunction: ForwardRefRenderFunction<
HTMLInputElement, IControlledTextFieldProps> = (props, ref): ReactNode => {
  const {
    name,
    label,
    ...otherProps
  } = props
  const { control } = useFormContext()

  return (
    <Controller name={ name }
      control={ control }
      render={ ({ field: { value, onChange }, fieldState: { error }}): ReactElement => {
        const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
          if (props.maxLength !== undefined && event.target.value.length > props.maxLength) return

          onChange(event)
        }

        return (
          <TextField
            { ...otherProps }
            value={ value as string }
            label={ label }
            onChange={ handleOnChange }
            isError={ error !== undefined }
            error={ error?.message }
            ref={ ref }
          />
        )
      } }
    />
  )
}

const ControlledTextField = forwardRef(ControlledTextFieldRenderFunction)

export { ControlledTextField }
