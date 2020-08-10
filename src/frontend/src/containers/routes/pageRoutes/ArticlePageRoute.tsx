import { ArticlePage } from '@/components/pages/article/ArticlePage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const ArticlePageRoute = createRouteConfig(
  ROUTE_TYPE.STANDARD,
  '/article/:articleId',
  ArticlePage,
  true
)

export const formatPath = (payload: { articleId: string }) =>
  formatPathByRouteConfig(ArticlePageRoute, payload)
