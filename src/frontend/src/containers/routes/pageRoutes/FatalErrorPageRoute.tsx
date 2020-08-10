import FatalErrorPage from '@/components/pages/error/FatalErrorPage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const FatalErrorPageRoute = createRouteConfig(
  ROUTE_TYPE.STANDARD,
  '/error',
  FatalErrorPage,
  true
)

export const formatPath = () => formatPathByRouteConfig(FatalErrorPageRoute)
