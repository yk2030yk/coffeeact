import NotFoundPage from '@/components/pages/error/NotFoundPage'
import { createRouteConfig, ROUTE_TYPE } from '../routeConfig'

export const NotFoundPageRoute = createRouteConfig(
  ROUTE_TYPE.STANDARD,
  '*',
  NotFoundPage,
  true
)
