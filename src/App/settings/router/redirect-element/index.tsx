import { useLocation, useNavigate } from 'react-router'

import { useEffect } from 'react'

import { createRoute } from '@shared/helpers/create-route'

import type { EPaths } from '@shared/enum'

import type { ReactNode } from 'react'

interface IRouteWithRedirectProps {
  redirectDefault: EPaths[] | EPaths
}

const RedirectElement = ({ redirectDefault }: IRouteWithRedirectProps): ReactNode => {
  const navigate = useNavigate()

  const location = useLocation()

  const path = location.pathname.split('/').slice(0, -1).join('/').
    concat('/').
    concat(createRoute(Array.isArray(redirectDefault) ? redirectDefault : [redirectDefault]))

  useEffect(() => {
    void navigate(path, { replace: false, relative: 'route' })
  }, [])

  return (
    <div />
  )
}

export default RedirectElement
