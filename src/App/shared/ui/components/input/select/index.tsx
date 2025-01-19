import { forwardRef, useState } from 'react'

import Icon from '@shared/ui/components/icon'

import { useHandleClickOutside } from '@shared/utils/use-handle-click-outside'

import { isFalsy, isTruthy, makeClassname } from '@shared/utils'

import NumberLimit from '@shared/ui/components/number-limit'

import classname from './index.module.scss'

import type { ReactNode, Ref } from 'react'

import type { ISelectOption, ISelectProps } from '@shared/ui/components/input'

const Select = forwardRef(function Select (
  { options, value, onChange, labelOverride, emptyMessage,
    error, isError = false, isMultiple = false, maxItems = 3 }: ISelectProps,
  _ref: Ref<HTMLDivElement>
): ReactNode {
  const [isOpen, setIsOpen] = useState(false)
  const openIconClassname = isOpen ? classname['icon--open'] : classname['icon--close']

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

  const noneOptionsClassName = makeClassname(classname.option, classname.label_container, '!h-[20px]')

  return (
    <div ref={ ref } className={ classname.wrapper }>
      <div
        className={ classname.select_wrapper }
        onClick={ handleToggleDropdown }
      >
        { labelOverride ?? selectedOptions.map((item) => {
          return (
            <div className={ classname['select_wrapper_label-item'] } key={ item.value }>
              { item?.label ?? '' }
            </div>
          )
        }) }

        <Icon source="arrow" className={ `${classname.icon} ${openIconClassname}` } />
      </div>

      { isOpen && (
        <div className={ classname.dropdown_wrapper }>
          { options.map((option) => {
            const isSelected = selectedOptions.includes(option)

            const handleSelect = (): void => {
              handleClickOption(option)
            }

            return (
              <div
                key={ option.value }
                className={ makeClassname(classname.option,
                  classname.label_container,
                  classname.choose_item,
                  isSelected ? classname.selected : classname.unselected) }
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
