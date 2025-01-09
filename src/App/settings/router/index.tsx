import { Route, Routes } from 'react-router'

import { PageTitle } from '@shared/enum/page-title'
import { ERoutes } from '@shared/enum/routes'
import { useNavigateDefault } from '@shared/utils/use-navigate-default'

import { ViewTodosPage } from './lazy-pages'

import BaseLayout from '../../widgets/layout/base'

import type { ReactElement } from 'react'

const Router = (): ReactElement => {
  useNavigateDefault([ERoutes.TODOS, ERoutes.LIST])

  return (
    <Routes>
      <Route path={ ERoutes.TODOS } element={ <BaseLayout /> }>
        <Route path={ ERoutes.LIST } element={ <ViewTodosPage title={ PageTitle.todos } /> } />
      </Route>
    </Routes>
  )
}

export default Router
