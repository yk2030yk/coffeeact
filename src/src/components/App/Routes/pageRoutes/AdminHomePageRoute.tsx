import AdminHomePage from '@/components/pages/admin/AdminHomePage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const AdminHomePageRoute = createRouteConfig(
  ROUTE_TYPE.ADMIN,
  '/admin/home',
  AdminHomePage,
  true
)

export const formatPath = () => formatPathByRouteConfig(AdminHomePageRoute)
