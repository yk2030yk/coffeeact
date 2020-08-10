import AboutPage from '@/components/pages/about/AboutPage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const AboutPageRoute = createRouteConfig(
  ROUTE_TYPE.STANDARD,
  '/about',
  AboutPage,
  true
)

export const formatPath = () => formatPathByRouteConfig(AboutPageRoute)
