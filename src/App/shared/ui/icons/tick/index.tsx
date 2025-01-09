import type { ReactElement } from 'react'

import type { IIconProps } from '@shared/ui/components/icon/interface'

export const TickIcon = ({ width, height, className, color = 'currentColor' }: IIconProps): ReactElement => (
  <svg width={ width }
    height={ height }
    viewBox="0 0 24 24"
    fill="none"
    className={ className }
  >
    <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
      stroke={ color }
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
