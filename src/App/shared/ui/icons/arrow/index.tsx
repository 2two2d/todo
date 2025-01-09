import type { ReactElement } from 'react'

import type { IIconProps } from '@shared/ui/components/icon/interface'

export const ArrowIcon = ({ width, height, className, color = 'currentColor' }: IIconProps): ReactElement => (
  <svg width={ width }
    height={ height }
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={ className }
  >
    <path
      d="M7.5 4.16699L12.5 10.0003L7.5 15.8337"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={ color }
    />
  </svg>
)
