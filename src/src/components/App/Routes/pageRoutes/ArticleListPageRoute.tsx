import { ArticleListPage } from '@/components/pages/article/ArticleListPage'
import { createRouteConfig } from '../routeConfig'

export const ArticleListPageRoute = createRouteConfig({
  name: '記事一覧ページ',
  path: '/articles',
  component: ArticleListPage,
})
