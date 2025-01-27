import type { ReactElement } from 'react'

import type { IIconProps } from '@shared/ui/components/icon/interface'

export const PadlockCloseIcon = ({ width, height, className, color = 'currentColor' }: IIconProps): ReactElement => (
  <svg fill={ color }
    width={ width }
    height={ height }
    viewBox="-6 -2 24 24"
    className={ className }
  >
    <path d="M6 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 9.528V4a4 4 0 1 1 8 0v5.528a6 6 0 1 1-8 0zM4 8.34A5.99 5.99 0 0 1 6 8c.701 0 1.374.12 2 .341V4a2 2 0 1 0-4 0v4.341zM6 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
  </svg>
)
