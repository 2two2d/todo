import { makeClassname } from '@shared/utils'

import style from './index.module.scss'

import type { ReactElement } from 'react'

import type { IDetailedProps } from '@shared/interface'

interface IGridListProps extends IDetailedProps<HTMLDivElement> {
  items: ReactElement[]
  itemClassName?: string
}

const FlexibleList = ({ items, itemClassName, className, ...props }: IGridListProps): ReactElement => {
  return (
    <div className={ makeClassname('paper', style['flexible-list'], className) } { ...props }>
      { items.map((item) => {
        return (
          <div className={ itemClassName } key={ item.key }>
            { item }
          </div>
        )
      }) }
    </div>
  )
}

export default FlexibleList
