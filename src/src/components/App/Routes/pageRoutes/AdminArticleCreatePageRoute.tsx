import { AdminArticleCreatePage } from '@/components/pages/article/AdminArticleCreatePage'
import { createRouteConfig, ROUTE_TYPE } from '../routeConfig'

export const AdminArticleCreatePageRoute = createRouteConfig({
  routeType: ROUTE_TYPE.ADMIN,
  path: '/admin/article/create',
  component: AdminArticleCreatePage,
})
