import { ICONS } from '@shared/ui/components/icon/state'

import type { ReactNode } from 'react'

import type { IIcon } from './interface'

const DEFAULT_SIZE_PX = 20

const Icon = ({ source, ...props }: IIcon): ReactNode => {
  const IconComponent = ICONS[source]

  const size = DEFAULT_SIZE_PX * (props.size ?? 1)

  return (
    <IconComponent width={ size }
      height={ size }
      { ...props }
      className="hover:opacity-65"
    />
  )
}

export default Icon
