import { SearchResultArticleListPage } from '@/components/pages/article/SearchResultArticleListPage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const SearchResultArticlesListPageRoute = createRouteConfig(
  ROUTE_TYPE.STANDARD,
  '/articles/search',
  SearchResultArticleListPage,
  true
)

export const formatPath = () =>
  formatPathByRouteConfig(SearchResultArticlesListPageRoute)
