import { useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router'

import { createRoute } from '@shared/helpers/create-route'

import type { ERoutes } from '@shared/enum/routes'

const useNavigateDefault = (defaultRoute: ERoutes[]): void => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '' || pathname === '/') {
      void navigate(createRoute(defaultRoute))
    }
  }, [])
}

export {
  useNavigateDefault
}
