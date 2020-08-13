import { AdminArticleListPage } from '@/components/pages/article/AdminArticleListPage'
import { createRouteConfig, ROUTE_TYPE } from '../routeConfig'

export const AdminArticlesPageRoute = createRouteConfig({
  routeType: ROUTE_TYPE.ADMIN,
  path: '/admin/articles',
  component: AdminArticleListPage,
})
