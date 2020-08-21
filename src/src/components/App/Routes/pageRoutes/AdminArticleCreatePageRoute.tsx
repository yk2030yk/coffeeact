import { AdminArticleCreatePage } from '@/components/pages/article/AdminArticleCreatePage'
import { createRouteConfig, ROUTE_TYPE } from '../routeConfig'

export const AdminArticleCreatePageRoute = createRouteConfig({
  name: '記事作成ページ',
  routeType: ROUTE_TYPE.ADMIN,
  path: '/admin/article/create',
  component: AdminArticleCreatePage,
})
