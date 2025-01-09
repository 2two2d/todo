import { makeClassname } from '@shared/utils'

import classname from './index.module.scss'

import type { IDetailedProps } from '@shared/interface'

import type { ReactElement } from 'react'

type ILayoutMainTitle = IDetailedProps<HTMLParagraphElement>

const LayoutMainTitle = ({ className, ...props }: ILayoutMainTitle): ReactElement => {
  return (
    <h1 className={ makeClassname(classname.title, className) } { ...props }>
      ToDo
    </h1>
  )
}

export default LayoutMainTitle
