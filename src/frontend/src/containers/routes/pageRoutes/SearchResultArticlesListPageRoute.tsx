import React from 'react'

import { SearchResultArticleListPage } from '@/components/pages/article/SearchResultArticleListPage'
import { AppRoute } from '../AppRoute'
import { paths } from '../paths'

export const SearchResultArticlesListPageRoute: React.FC = () => (
  <AppRoute
    exact
    path={paths.STANDARD_SEARCH_ARTICLES}
    component={SearchResultArticleListPage}
  />
)
