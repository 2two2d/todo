import type { EPaths } from '../../enum/paths'

const createRoute = (routes: EPaths[]): string => {
  return routes.join('/')
}

export {
  createRoute
}
