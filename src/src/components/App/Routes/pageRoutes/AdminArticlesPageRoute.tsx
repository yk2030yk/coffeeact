import { AdminArticleListPage } from '@/components/pages/article/AdminArticleListPage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const AdminArticlesPageRoute = createRouteConfig(
  ROUTE_TYPE.ADMIN,
  '/admin/articles',
  AdminArticleListPage,
  true
)

export const formatPath = () => formatPathByRouteConfig(AdminArticlesPageRoute)
