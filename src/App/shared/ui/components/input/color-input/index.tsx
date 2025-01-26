import { v4 as uuid } from 'uuid'

import { HexColorPicker } from 'react-colorful'

import './styles.css'

import { forwardRef, useEffect, useMemo, useRef, useState } from 'react'

import { BaseInput, TextField } from '@shared/ui/components/input'

import { isTruthy, makeClassname } from '@shared/utils'

import styles from './index.module.scss'

import type { IColorInputProps } from '@shared/ui/components/input'
import type { ChangeEvent, ForwardRefRenderFunction, MouseEvent, ReactNode } from 'react'

const ColorInputRenderFunction: ForwardRefRenderFunction<
HTMLInputElement,
IColorInputProps
> = (props, ref): ReactNode => {
  const {
    isError = false,
    error,
    className,
    pickerClassName,
    currentValue,
    id: externalId,
    onColorChange: externalHandleColorChange,
    initialValue,
    ...rest
  } = props

  const [color, setColor] = useState<string>(currentValue ?? initialValue as string)

  const id = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return externalId ?? `text-field--${uuid()}`
  }, [externalId])

  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false)
  const pickerRef = useRef<HTMLDivElement | null>(null)

  const isConditionWhiteText = color?.toString().toUpperCase() === String('#FFFFFF')

  const colorIconClassname = makeClassname(
    styles.common,
    isConditionWhiteText && styles.isValueWhite
  )

  const handleTogglePicker = (): void => {
    setIsPickerVisible((prev) => !prev)
  }

  const handleColorChange = (newColor: string): void => {
    setColor(() => {
      return isTruthy(currentValue) ? currentValue : newColor
    })

    externalHandleColorChange && externalHandleColorChange(newColor)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setColor(e.target.value)
  }

  const handleClickOutside = (e: MouseEvent): void => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
      setIsPickerVisible(false)
    }
  }

  useEffect(() => {
    // @ts-expect-error overload handle
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // @ts-expect-error overload handle
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setColor(currentValue ?? initialValue as string)
  }, [currentValue])

  return (
    <div className={ `${className} relative inline-block` } ref={ pickerRef }>
      <TextField{ ...rest }
        id={ id }
        isError={ isError }
        error={ error }
        value={ color }
        onClick={ handleTogglePicker }
        onChange={ props.onChange ? props.onChange : handleOnChange }
        ref={ ref }
        iconPosition="color"
        icon={ <div className={ colorIconClassname } style={{ background: color }} /> }
      />

      { isPickerVisible && (
        <div className={ `absolute top-[74px] left-0 w-[264px] z-[10] p-4 rounded-lg bg-white
         border border-border-gray2` }
        >

          <div className="custom-layout">
            <HexColorPicker color={ color } onChange={ handleColorChange } className={ pickerClassName } />

            <BaseInput inputSize="small"
              borderRadius="small"
              isUpperCase={ true }
              value={ color }
              onChange={ handleOnChange }
            />
          </div>
        </div>
      ) }

    </div>
  )
}

const ColorInput = forwardRef(ColorInputRenderFunction)

export { ColorInput }
