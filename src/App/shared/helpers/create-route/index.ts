import type { ERoutes } from '@shared/enum/routes'

const createRoute = (routes: ERoutes[]): string => {
  return routes.join('/')
}

export {
  createRoute
}
