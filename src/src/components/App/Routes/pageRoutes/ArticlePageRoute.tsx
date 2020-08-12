import { ArticlePage } from '@/components/pages/article/ArticlePage'
import { createRouteConfig } from '../routeConfig'

export const ArticlePageRoute = createRouteConfig<{ articleId: string }>({
  path: '/article/:articleId',
  component: ArticlePage,
})
