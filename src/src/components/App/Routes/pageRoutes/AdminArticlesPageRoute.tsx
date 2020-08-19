import { AdminArticleListPage } from '@/components/pages/article/AdminArticleListPage'
import { createRouteConfig, ROUTE_TYPE } from '../routeConfig'

export const AdminArticlesPageRoute = createRouteConfig({
  name: '記事一覧ページ',
  routeType: ROUTE_TYPE.ADMIN,
  path: '/admin/articles',
  component: AdminArticleListPage,
})
