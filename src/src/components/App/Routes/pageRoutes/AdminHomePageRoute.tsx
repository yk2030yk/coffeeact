import AdminHomePage from '@/components/pages/admin/AdminHomePage'
import { createRouteConfig, ROUTE_TYPE } from '../routeConfig'

export const AdminHomePageRoute = createRouteConfig({
  routeType: ROUTE_TYPE.ADMIN,
  path: '/admin/home',
  component: AdminHomePage,
})
