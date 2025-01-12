import type { ReactElement } from 'react'

import type { IIconProps } from '@shared/ui/components/icon/interface'

export const SearchIcon = ({ width, height, className, color = 'currentColor' }: IIconProps): ReactElement => (
  <svg width={ width }
    height={ height }
    viewBox="0 0 24 24"
    fill="none"
    className={ className }
  >
    <g id="Interface / Search_Magnifying_Glass">
      <path id="Vector"
        d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
        stroke={ color }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
)