import AdminHomePage from '@/components/pages/admin/AdminHomePage'
import { createRouteConfig, ROUTE_TYPE } from '../routeConfig'

export const AdminHomePageRoute = createRouteConfig({
  name: '管理画面トップ',
  routeType: ROUTE_TYPE.ADMIN,
  path: '/admin/home',
  component: AdminHomePage,
})
