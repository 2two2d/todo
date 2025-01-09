import Icon from '@shared/ui/components/icon'

import { makeClassname } from '@shared/utils'

import classname from './index.module.scss'

import type { ReactNode } from 'react'

import type { IDetailedProps } from '@shared/interface'
import type { IIconName } from '@shared/ui/components/icon/interface'

interface ITextActiveProps extends IDetailedProps<HTMLParagraphElement> {
  text: string
  iconSource?: IIconName
}

const TextAction = ({ text, iconSource, className, ...props }: ITextActiveProps): ReactNode => {
  return (
    <p className={ makeClassname(classname['text-action'], className) } { ...props }>
      { text }

      { iconSource && <Icon source={ iconSource } /> }
    </p>
  )
}

export default TextAction
