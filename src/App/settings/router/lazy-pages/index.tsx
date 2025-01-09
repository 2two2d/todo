import { lazy } from 'react'

import { LoadComponent } from '@settings/router/load-component'

const ViewTodosPage = LoadComponent(lazy(async () => import('@pages/view-todos')))

export {
  ViewTodosPage
}
