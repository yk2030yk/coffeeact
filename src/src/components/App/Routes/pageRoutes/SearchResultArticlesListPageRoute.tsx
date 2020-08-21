import { SearchResultArticleListPage } from '@/components/pages/article/SearchResultArticleListPage'
import { createRouteConfig } from '../routeConfig'

export const SearchResultArticlesListPageRoute = createRouteConfig<
  undefined,
  { tag: string }
>({
  name: '記事検索結果ページ',
  path: '/articles/search',
  component: SearchResultArticleListPage,
})
