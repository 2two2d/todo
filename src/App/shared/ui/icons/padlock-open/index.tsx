import type { ReactElement } from 'react'

import type { IIconProps } from '@shared/ui/components/icon/interface'

export const PadlockOpenIcon = ({ width, height, className, color = 'currentColor' }: IIconProps): ReactElement => (
  <svg fill={ color }
    width={ width }
    height={ height }
    viewBox="-6 -2 24 24"
    className={ className }
  >
    <path
      d="M6 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 9.528V4a4 4 0 1 1 8 0v1a1 1 0 1 1-2 0V4a2 2 0 1 0-4 0v4.341a6 6 0 1 1-2 1.186zM6 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
    />
  </svg>
)
