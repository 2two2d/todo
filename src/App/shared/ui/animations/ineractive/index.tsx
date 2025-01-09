import { motion } from 'motion/react'

import { makeClassname } from '@shared/utils'

import type { PropsWithChildren, ReactElement } from 'react'

interface IAnimationInteractiveProps extends PropsWithChildren {
  className?: string
}

const AnimationInteractive = ({ children, className, ...props }: IAnimationInteractiveProps): ReactElement => {
  return (
    <motion.div
      className={ makeClassname('cursor-pointer', className) }
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.12 }}
      { ...props }
    >
      { children }
    </motion.div>
  )
}

export default AnimationInteractive
