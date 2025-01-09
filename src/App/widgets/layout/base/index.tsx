import { Outlet } from 'react-router'

import LayoutMainTitle from '@widgets/layout/base/title'

import GradientBackground from './gradient-background'

import type { ReactElement } from 'react'

const BaseLayout = (): ReactElement => {
  return (
    <div className="w-[960px] m-auto pt-[180px] relative flex flex-col items-center gap-10">
      <GradientBackground />

      <LayoutMainTitle />

      <Outlet />
    </div>
  )
}

export default BaseLayout
