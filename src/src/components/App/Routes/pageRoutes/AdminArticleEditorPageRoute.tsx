import { AdminArticleEditorPage } from '@/components/pages/article/AdminArticleEditorPage'
import { createRouteConfig, ROUTE_TYPE } from '../routeConfig'

export const AdminArticleEditorPageRoute = createRouteConfig<{
  articleId: string
}>({
  routeType: ROUTE_TYPE.ADMIN,
  path: '/admin/article/:articleId',
  component: AdminArticleEditorPage,
})
