import HomePage from '@/components/pages/home/HomePage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const HomePageRoute = createRouteConfig(
  ROUTE_TYPE.STANDARD,
  '/',
  HomePage,
  true
)

export const formatPath = () => formatPathByRouteConfig(HomePageRoute)
