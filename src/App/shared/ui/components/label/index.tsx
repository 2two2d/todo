import { makeClassname } from '@shared/utils'

import styles from './index.module.scss'

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

interface IBaseLabelProps extends ComponentPropsWithoutRef<'label'> {
  isRequired?: boolean
  label?: ReactNode
}

const BaseLabel: FC<IBaseLabelProps> = ({ isRequired, label, className, children, ...props }) => {
  return (
    <label
      { ...props }
      className={ makeClassname(
        styles.label,
        isRequired === true && styles.req,
        isRequired === false && styles.noReq,
        className
      ) }
    >
      { label !== undefined &&
        <span className={ styles['label-text'] }>{ label }</span> }

      { children }
    </label>
  )
}

export { BaseLabel }
