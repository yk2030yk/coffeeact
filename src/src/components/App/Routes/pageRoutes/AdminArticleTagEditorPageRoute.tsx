import { AdminArticleTagEditorPage } from '@/components/pages/articleTag/AdminArticleTagEditorPage'
import { createRouteConfig, ROUTE_TYPE } from '../routeConfig'

export const AdminArticleTagEditorPageRoute = createRouteConfig({
  name: 'タグ管理ページ',
  routeType: ROUTE_TYPE.ADMIN,
  path: '/admin/tag',
  component: AdminArticleTagEditorPage,
})
