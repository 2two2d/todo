import { makeClassname } from '@shared/utils'

import type { ReactElement } from 'react'

import type { IDetailedProps } from '@shared/interface'

interface INumberLimitProps extends IDetailedProps<HTMLParagraphElement> {
  currentNumber: number
  maxNumber: number
}

const NumberLimit = ({ currentNumber, maxNumber, className, ...props }: INumberLimitProps): ReactElement => {
  return (
    <p className={ makeClassname('text-[16px] text-text-gray font-semibold tracking-[1px]', className) } { ...props }>
      { `${currentNumber}/${maxNumber}` }
    </p>
  )
}

export default NumberLimit
