import type { ReactElement } from 'react'

import type { IIconProps } from '@shared/ui/components/icon/interface'

export const DetachIcon = ({ width, height, className, color = 'currentColor' }: IIconProps): ReactElement => (
  <svg fill="#000000"
    width={ width }
    height={ height }
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={ className }
  >
    <path fill={ color } d="M6,5.414,4.707,6.707A1,1,0,0,1,3.293,5.293L4.586,4,3.293,2.707A1,1,0,0,1,4.707,1.293L6,2.586,7.293,1.293A1,1,0,0,1,8.707,2.707L7.414,4,8.707,5.293A1,1,0,1,1,7.293,6.707ZM21,10v4a1,1,0,0,1-1,1H16a1,1,0,0,1-1-1V13H7v6h8V18a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v4a1,1,0,0,1-1,1H16a1,1,0,0,1-1-1V21H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1h9V10a1,1,0,0,1,1-1h4A1,1,0,0,1,21,10ZM17,21h2V19H17Zm2-10H17v2h2Z" />
  </svg>
)
