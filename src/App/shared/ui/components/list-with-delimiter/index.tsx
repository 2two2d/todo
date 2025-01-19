import { Children } from 'react'

import { isTruthy, makeClassname } from '@shared/utils'

import type { PropsWithChildren, ReactNode } from 'react'

import type { IDetailedProps } from '@shared/interface'

interface IListWithDelimiterProps extends IDetailedProps<HTMLDivElement>, PropsWithChildren {
  gapBetween?: number
}

const ListWithDelimiter = ({ children, gapBetween = 1, className, ...props }: IListWithDelimiterProps): ReactNode => {
  if (Array.isArray(children)) {
    children = children.filter((item) => isTruthy(item))
  }

  const childrenTotal = Children.count(children)

  return (
    <div className={ makeClassname(`flex gap-${gapBetween}`, className) } { ...props }>
      { Children.map(children, (child, id) => {
        const item = (
          <div className={ `pr-${gapBetween}}` }>
            { child }
          </div>
        )

        return childrenTotal === 1
          ? item
          : (
            <>
              { item }

              { id + 1 !== childrenTotal &&
                <div className="w-[1px] h-full bg-border-gray" /> }
            </>
          )
      }) }
    </div>
  )
}

export default ListWithDelimiter
