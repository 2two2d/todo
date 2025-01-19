import { ICONS } from '@shared/ui/components/icon/state'

import { makeClassname } from '@shared/utils'

import type { ReactNode } from 'react'

import type { IIcon } from './interface'

const DEFAULT_SIZE_PX = 20

const Icon = ({ source, className, ...props }: IIcon): ReactNode => {
  const IconComponent = ICONS[source]

  const size = DEFAULT_SIZE_PX * (props.size ?? 1)

  return (
    <IconComponent width={ size }
      height={ size }
      { ...props }
      className={ makeClassname('hover:opacity-65', className) }
    />
  )
}

export default Icon
