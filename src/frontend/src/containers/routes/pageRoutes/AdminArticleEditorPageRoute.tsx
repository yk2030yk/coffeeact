import { AdminArticleEditorPage } from '@/components/pages/article/AdminArticleEditorPage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const AdminArticleEditorPageRoute = createRouteConfig(
  ROUTE_TYPE.ADMIN,
  '/admin/article/:articleId',
  AdminArticleEditorPage,
  true
)

export const formatPath = (payload: { articleId: string }) =>
  formatPathByRouteConfig(AdminArticleEditorPageRoute, payload)
