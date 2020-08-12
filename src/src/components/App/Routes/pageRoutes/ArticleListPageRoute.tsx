import { ArticleListPage } from '@/components/pages/article/ArticleListPage'
import { createRouteConfig } from '../routeConfig'

export const ArticleListPageRoute = createRouteConfig({
  path: '/articles',
  component: ArticleListPage,
})
