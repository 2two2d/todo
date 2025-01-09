import type { ReactElement } from 'react'

import type { IIconProps } from '@shared/ui/components/icon/interface'

export const CheckIcon = ({ width, height, className, color = 'currentColor' }: IIconProps): ReactElement => (
  <svg width={ width }
    height={ height }
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={ className }
  >
    <path d="M7 12.9L10.1429 16.5L18 7.5"
      stroke={ color }
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
