import { useFormContext } from 'react-hook-form'

import { type ChangeEventHandler, type FC, useEffect, useState } from 'react'

import { ColorInput } from '@shared/ui/components/input/color-input'

import { truthy } from '@shared/utils'

import type { IColorInputProps } from '@shared/ui/components/input/interface'

interface IColorInputControlledProps extends Omit<IColorInputProps, 'setColor'> {
  name: string
}

const ColorInputControlled: FC<IColorInputControlledProps> = ({ name, ...props }) => {
  const initialValue = props.defaultValue as string ?? '#FFFFFF'

  const { watch, setValue, formState } = useFormContext()
  const [currentValue, setCurrentValue] = useState(initialValue)
  const watchValue = watch(name) as string

  const handleColorChange = (newColor: string): void => {
    setCurrentValue(newColor)
    setValue(name, newColor)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (/^#[0-9a-fA-F]{0,6}$/.test(e.target.value)) {
      setValue(name, e.target.value)
    }
  }

  useEffect(() => {
    setCurrentValue(watchValue)
  }, [watchValue])

  useEffect(() => {
    setValue(name, initialValue)
  }, [])

  const error = formState.errors[name]?.message as string | undefined

  return (
    <ColorInput
      { ...props }
      onChange={ handleChange }
      onColorChange={ handleColorChange }
      currentValue={ currentValue }
      initialValue={ initialValue }
      isError={ error !== undefined }
      error={ truthy(error) ? error : '' }
    />
  )
}

export {
  ColorInputControlled
}
