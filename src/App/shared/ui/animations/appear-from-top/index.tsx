import { motion } from 'motion/react'

import { makeClassname } from '@shared/utils'

import type { PropsWithChildren, ReactElement } from 'react'

interface IAnimationPopUpProps extends PropsWithChildren {
  className?: string
}

const AnimationAppearFromTop = ({ children, className, ...props }: IAnimationPopUpProps): ReactElement => {
  return (
    <motion.div
      className={ makeClassname('', className) }
      initial={{ y: -20, scale: 0 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      { ...props }
    >
      { children }
    </motion.div>
  )
}

export default AnimationAppearFromTop
