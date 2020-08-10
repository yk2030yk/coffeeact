import React from 'react'

import { ArticlePage } from '@/components/pages/article/ArticlePage'
import { AppRoute } from '../AppRoute'
import { paths } from '../paths'

export const ArticlePageRoute: React.FC = () => (
  <AppRoute exact path={paths.STANDARD_ARTICLE} component={ArticlePage} />
)
