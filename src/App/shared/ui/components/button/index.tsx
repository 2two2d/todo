import { makeClassname } from '@shared/utils'

import Icon from '@shared/ui/components/icon'

import style from './index.module.scss'

import type { IIconName } from '@shared/ui/components/icon/interface'

import type { IDetailedProps } from '@shared/interface'
import type { ReactElement } from 'react'

interface IButtonProps extends IDetailedProps<HTMLButtonElement> {
  buttonText?: string
  type?: 'button' | 'submit' | 'reset'
  icon?: IIconName
}

const Button = ({ buttonText, icon, className, ...props }: IButtonProps): ReactElement => {
  return (
  // eslint-disable-next-line react/button-has-type
    <button
      className={ makeClassname(style.button, className) }
      { ...props }
    >
      { buttonText }

      { icon &&
        <Icon source={ icon } /> }
    </button>
  )
}

export default Button
