import LoginPage from '@/components/pages/admin/LoginPage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const LoginPageRoute = createRouteConfig(
  ROUTE_TYPE.STANDARD,
  '/login',
  LoginPage,
  true
)

export const formatPath = () => formatPathByRouteConfig(LoginPageRoute)
