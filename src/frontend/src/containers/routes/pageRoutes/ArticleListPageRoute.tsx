import React from 'react'

import { ArticleListPage } from '@/components/pages/article/ArticleListPage'
import { AppRoute } from '../AppRoute'
import { paths } from '../paths'

export const ArticleListPageRoute: React.FC = () => (
  <AppRoute exact path={paths.STANDARD_ARTICLES} component={ArticleListPage} />
)
