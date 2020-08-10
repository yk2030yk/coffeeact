import { ArticleListPage } from '@/components/pages/article/ArticleListPage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const ArticleListPageRoute = createRouteConfig(
  ROUTE_TYPE.STANDARD,
  '/articles',
  ArticleListPage,
  true
)

export const formatPath = () => formatPathByRouteConfig(ArticleListPageRoute)
