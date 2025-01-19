import { forwardRef } from 'react'

import { Controller, useFormContext } from 'react-hook-form'

import { isTruthy } from '@shared/utils'

import Select from '../../select'

import type { ForwardRefRenderFunction, ReactElement, ReactNode } from 'react'

import type { ISelectControlledProps } from '@shared/ui/components/input/interface'

const ControlledSelectInputRenderFunction: ForwardRefRenderFunction<
HTMLInputElement, ISelectControlledProps> = (props, ref): ReactNode => {
  const {
    name,
    isMultiple = false,
    maxItems = 3,
    ...otherProps
  } = props

  const { control } = useFormContext()

  return (
    <Controller name={ name }
      control={ control }
      render={ ({ field: { value, onChange }, fieldState: { error }}): ReactElement => {
        const handleChange = (newValue: string): void => {
          if (isMultiple) {
            let res = (isTruthy(value) ? value : []) as string[]

            res = res.includes(newValue) ? res.filter((item) => item !== newValue) : res.concat(newValue)

            onChange(res.slice(-maxItems))
          } else {
            onChange(newValue)
          }
        }

        return (
          <Select
            { ...otherProps }
            value={ value as string[] | undefined }
            onChange={ handleChange }
            isError={ error !== undefined }
            error={ error?.message }
            isMultiple={ isMultiple }
            maxItems={ maxItems }
            ref={ ref }
          />
        )
      } }
    />
  )
}

const ControlledSelect = forwardRef(ControlledSelectInputRenderFunction)

export { ControlledSelect }
