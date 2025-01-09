import { useState } from 'react'

import { makeClassname } from '@shared/utils'

import AppearFromTop from '@shared/ui/animations/appear-from-top'

import { useHandleClickOutside } from '@shared/utils/use-handle-click-outside'

import classname from './index.module.scss'

import type { PropsWithChildren, ReactNode } from 'react'

import type { IDetailedProps } from '@shared/interface'

interface IToolTipProps extends IDetailedProps<HTMLDivElement>, PropsWithChildren {
  toolTip: ReactNode
}

const WithToolTip = ({ children, toolTip, className, ...props }: IToolTipProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleToolTip = (): void => {
    setIsOpen((prev) => !prev)
  }

  const handleCloseToolTip = (): void => {
    setIsOpen(false)
  }

  const ref = useHandleClickOutside(handleCloseToolTip)

  return (
    <div className={ makeClassname('relative', className) }
      onClick={ handleToggleToolTip }
      ref={ ref }
      { ...props }
    >
      { children }

      { isOpen && (
        <AppearFromTop>
          <div className={ classname['tool-tip-wrapper'] }>
            <div className={ classname['tool-tip-wrapper_pointer'] } />

            <div className={ classname['tool-tip-wrapper_content'] }>
              { toolTip }
            </div>
          </div>
        </AppearFromTop>
      ) }
    </div>
  )
}

export default WithToolTip
