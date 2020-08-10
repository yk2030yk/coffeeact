import { AdminArticleTagEditorPage } from '@/components/pages/articleTag/AdminArticleTagEditorPage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const AdminArticleTagEditorPageRoute = createRouteConfig(
  ROUTE_TYPE.ADMIN,
  '/admin/tag',
  AdminArticleTagEditorPage,
  true
)

export const formatPath = () =>
  formatPathByRouteConfig(AdminArticleTagEditorPageRoute)
