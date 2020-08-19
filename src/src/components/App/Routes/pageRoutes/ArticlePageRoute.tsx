import { ArticlePage } from '@/components/pages/article/ArticlePage'
import { createRouteConfig } from '../routeConfig'

export const ArticlePageRoute = createRouteConfig<{ articleId: string }>({
  name: '記事詳細ページ',
  path: '/article/:articleId',
  component: ArticlePage,
})
