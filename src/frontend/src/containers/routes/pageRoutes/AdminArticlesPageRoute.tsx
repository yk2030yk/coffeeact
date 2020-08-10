import React from 'react'

import { AdminArticleListPage } from '@/components/pages/article/AdminArticleListPage'
import { AuthRoute } from '../AuthRoute'
import { paths } from '../paths'

export const AdminArticlesPageRoute: React.FC = () => (
  <AuthRoute
    exact
    path={paths.ADMIN_ARTICLES}
    component={AdminArticleListPage}
  />
)
