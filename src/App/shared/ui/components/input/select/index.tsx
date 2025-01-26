import { forwardRef, useState } from 'react'

import Icon from '@shared/ui/components/icon'

import { useHandleClickOutside } from '@shared/utils/use-handle-click-outside'

import { isFalsy, isTruthy, makeClassname } from '@shared/utils'

import NumberLimit from '@shared/ui/components/number-limit'

import style from './index.module.scss'

import type { ReactNode, Ref } from 'react'

import type { ISelectOption, ISelectProps } from '@shared/ui/components/input'

const Select = forwardRef(function Select (
  { options, value, onChange, labelOverride, placeholder, emptyMessage,
    error, isError = false, isMultiple = false, maxItems = 3, className }: ISelectProps,
  _ref: Ref<HTMLDivElement>
): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const openIconClassname = isOpen ? style['icon--open'] : style['icon--close']

  const selectedOptions = isTruthy(value) ? options.filter((option) => value.includes(option.value)) : []

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

  const noneOptionsClassName = makeClassname(style.option, style.label_container, '!h-[20px]')

  return (
    <div ref={ ref } className={ makeClassname(style.common, className) }>
      <div
        className={ style.wrapper }
        onClick={ handleToggleDropdown }
      >
        { labelOverride ?? selectedOptions.map((item) => {
          return (
            <div className={ style.labelItem } key={ item.value }>
              { item?.label ?? '' }
            </div>
          )
        }) }

        { isTruthy(placeholder) && isFalsy(selectedOptions) &&
          <p className={ style.placeholder }>{ placeholder }</p> }

        <Icon source="arrow" className={ `${style.icon} ${openIconClassname}` } />
      </div>

      { isOpen && (
        <div className={ style.dropdown_wrapper }>
          { options.map((option) => {
            const isSelected = selectedOptions.includes(option)

            const handleSelect = (): void => {
              handleClickOption(option)
            }

            return (
              <div
                key={ option.value }
                className={ makeClassname(style.option,
                  style.label_container,
                  style.choose_item,
                  isSelected ? style.selected : style.unselected) }
                onClick={ handleSelect }
              >
                { option.label }

                { isSelected && <Icon source="check" /> }
              </div>
            )
          }) }

          { isTruthy(emptyMessage) && isFalsy(options) &&
            <p className={ makeClassname(noneOptionsClassName, 'text-text-gray font-semibold') }>{ emptyMessage }</p> }

          { isMultiple && (
            <NumberLimit
              className={ makeClassname(noneOptionsClassName, '!ml-[180px]') }
              maxNumber={ maxItems }
              currentNumber={ value?.length ?? 0 }
            />
          ) }
        </div>
      ) }

      { isError && error !== null &&
        <span className="mt-1 ml-1 text-[14px] text-text-validation-text">{ error }</span> }
    </div>
  )
})

export default Select
