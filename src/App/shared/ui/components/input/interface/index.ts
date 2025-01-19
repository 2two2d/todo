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

interface ISelectOption {
  label: ReactNode | string
  value: string
}

interface ISelectProps extends ISpecialTextFieldProps {
  options: ISelectOption[]
  value?: string[]
  labelOverride?: string
  isMultiple?: boolean
  maxItems?: number
  emptyMessage?: string
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
