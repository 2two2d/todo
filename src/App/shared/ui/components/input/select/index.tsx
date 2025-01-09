import { forwardRef, useState } from 'react'

import Icon from '@shared/ui/components/icon'

import { useHandleClickOutside } from '@shared/utils/use-handle-click-outside'

import classname from './index.module.scss'

import type { ReactNode, Ref } from 'react'

import type { ISelectOption, ISelectProps } from '@shared/ui/components/input'

const Select = forwardRef(function Select (
  { options, value, onChange, labelOverride, error, isError = false }: ISelectProps,
  _ref: Ref<HTMLDivElement>
): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const openIconClassname = isOpen ? classname['icon--open'] : classname['icon--close']

  const selectedOption = options.find((option) => option.value === value) || null

  const handleToggleDropdown = (): void => {
    setIsOpen(!isOpen)
  }

  const handleClickOption = (option: ISelectOption): void => {
    onChange(option.value)
    setIsOpen(false)
  }

  const handleCloseDropdown = (): void => {
    setIsOpen(false)
  }

  const ref = useHandleClickOutside(handleCloseDropdown)

  return (
    <div ref={ ref } className={ classname.wrapper }>
      <div
        className={ classname.select_wrapper }
        onClick={ handleToggleDropdown }
      >
        <span>
          { labelOverride ?? (selectedOption?.label ?? '') }
        </span>

        <Icon source="arrow" className={ `${classname.icon} ${openIconClassname}` } />
      </div>

      { isOpen && (
        <div className={ classname.dropdown_wrapper }>
          { options.map((option) => {
            const handleSelect = (): void => {
              handleClickOption(option)
            }
            return (
              <div
                key={ option.value }
                className={ `${classname.option} ${classname.label_container} ${classname.choose_item} ${
                  selectedOption === option ? classname.selected : classname.unselected
                }` }
                onClick={ handleSelect }
              >
                { option.label }

                { selectedOption === option && <Icon source="check" /> }
              </div>
            )
          }) }
        </div>
      ) }

      { isError && error !== null &&
        <span className="mt-1 ml-1 text-[14px] text-text-validation-text">{ error }</span> }
    </div>
  )
})

export default Select
