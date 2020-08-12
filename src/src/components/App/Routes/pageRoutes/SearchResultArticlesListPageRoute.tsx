import { SearchResultArticleListPage } from '@/components/pages/article/SearchResultArticleListPage'
import { createRouteConfig } from '../routeConfig'

export const SearchResultArticlesListPageRoute = createRouteConfig({
  path: '/articles/search',
  component: SearchResultArticleListPage,
})
