import { forwardRef } from 'react'

import { SnackbarContent } from 'notistack'

import Icon from '@shared/ui/components/icon'

import classname from './index.module.scss'

import type { CustomContentProps } from 'notistack'

const AlertSuccess = forwardRef<HTMLDivElement, CustomContentProps>(
  ({ ...props }, ref) => {
    return (
      <SnackbarContent ref={ ref } className={ classname.alert }>
        <Icon source="tick" color="#22AD5C" />

        <p className={ classname['alert-text'] }>{ props.message }</p>
      </SnackbarContent>
    )
  }
)

AlertSuccess.displayName = 'AlertSuccess'

export default AlertSuccess
