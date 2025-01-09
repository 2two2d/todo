import { motion } from 'motion/react'

import { makeClassname } from '@shared/utils'

import type { PropsWithChildren, ReactElement } from 'react'

interface IAnimationAppearProps extends PropsWithChildren {
  className?: string
}

const AnimationAppear = ({ children, className, ...props }: IAnimationAppearProps): ReactElement => {
  return (
    <motion.div
      className={ makeClassname('', className) }
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 }}}
      { ...props }
    >
      { children }
    </motion.div>
  )
}

export default AnimationAppear
