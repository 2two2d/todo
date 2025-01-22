import type { InputHTMLAttributes, ReactNode } from 'react'

interface IBaseInputProps<T> extends InputHTMLAttributes<T> {
  isError?: boolean
}

interface ISpecialInputProps {
  icon?: ReactNode
  iconPosition?: 'start' | 'end' | 'color'
  inputSize?: 'small' | 'medium' | 'big'
  isUpperCase?: boolean
  borderRadius?: 'small' | 'medium'
  inputClassName?: string
}

type IInputProps = IBaseInputProps<HTMLInputElement> & ISpecialInputProps

interface ISpecialTextFieldProps {
  label?: string
  error?: string
  isError?: boolean
}

interface ITextFieldProps extends IInputProps, ISpecialTextFieldProps {
}

interface IControlledTextFieldProps extends Omit<IInputProps, 'value' | 'onChange' | 'name'> {
  name: string
  label?: string
}

interface IColorInputProps extends ITextFieldProps {
  currentValue?: string
  initialValue?: string
  pickerClassName?: string

  onColorChange?(newColor: string): void
}

interface ISelectOption<T = string> {
  label: ReactNode | string
  value: T
}

interface ISelectProps<T = string> extends ISpecialTextFieldProps {
  options: ISelectOption<T>[]
  value?: T[]
  labelOverride?: string
  isMultiple?: boolean
  maxItems?: number
  emptyMessage?: string
  placeholder?: string
  className?: string
  onChange(value: string): void
}

interface ISelectControlledProps extends Omit<ISelectProps, 'onChange'> {
  name: string
  label?: string
  isRequired?: boolean
}

export type {
  IInputProps,
  ITextFieldProps,
  IColorInputProps,
  IControlledTextFieldProps,
  ISelectProps,
  ISelectOption,
  ISelectControlledProps
}
