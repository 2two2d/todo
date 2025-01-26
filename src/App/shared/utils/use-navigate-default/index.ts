import { useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router'

import { createRoute } from '@shared/helpers/create-route'

import type { EPaths } from '@shared/enum/paths'

const useNavigateDefault = (defaultRoute: EPaths[]): void => {
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
