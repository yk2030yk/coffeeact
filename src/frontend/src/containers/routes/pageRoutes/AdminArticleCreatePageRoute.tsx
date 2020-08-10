import { AdminArticleCreatePage } from '@/components/pages/article/AdminArticleCreatePage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const AdminArticleCreatePageRoute = createRouteConfig(
  ROUTE_TYPE.ADMIN,
  '/admin/article/create',
  AdminArticleCreatePage,
  true
)

export const formatPath = () =>
  formatPathByRouteConfig(AdminArticleCreatePageRoute)
