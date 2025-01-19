import { makeClassname } from '@shared/utils'
import { addHexTransparency } from '@shared/utils/add-hex-transparency'

import style from './index.module.scss'

import type { IDetailedProps } from '@shared/interface'
import type { ReactElement } from 'react'

interface IBadgeProps extends IDetailedProps<HTMLDivElement> {
  text: string
  color?: string
}

const HEX_TRANSPARENCY = 20

const Badge = ({ text, color = '#2266FF', className, ...props }: IBadgeProps): ReactElement => {
  return (
    <div className={ makeClassname(style.badge, className) }
      style={{ color: color, backgroundColor: addHexTransparency(color, HEX_TRANSPARENCY), borderColor: color }}
      { ...props }
    >
      <p className={ style.badge_text }>
        { text }
      </p>
    </div>
  )
}

export default Badge
