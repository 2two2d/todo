import { Navigate, Route, Routes, } from 'react-router'

import { useNavigateDefault } from '@shared/utils/use-navigate-default'

import { DEFAULT_ROUTE } from '@settings/router/state'

import { EPaths } from '@shared/enum/paths'

import { EPageTitle } from '@settings/router/enum/page-title'

import BaseLayout from '@widgets/layout/base'

import RedirectElement from './redirect-element'

import { ViewTodosPage } from './lazy-pages'

import type { ReactElement } from 'react'

const Router = (): ReactElement => {
  useNavigateDefault(DEFAULT_ROUTE)

  return (
    <Routes>
      <Route path={ EPaths.TODOS } element={ <BaseLayout /> }>
        <Route path="" element={ <Navigate to={ EPaths.LIST } /> } />

        <Route path="*" element={ <RedirectElement redirectDefault={ [EPaths.LIST] } /> } />

        <Route path={ EPaths.LIST } element={ <ViewTodosPage title={ EPageTitle.todos } /> } />
      </Route>

      <Route path="*" element={ <RedirectElement redirectDefault={ [EPaths.TODOS] } /> } />
    </Routes>
  )
}

export default Router
