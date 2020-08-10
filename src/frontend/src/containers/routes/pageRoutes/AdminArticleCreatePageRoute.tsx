import React from 'react'

import { AdminArticleCreatePage } from '@/components/pages/article/AdminArticleCreatePage'
import { AuthRoute } from '../AuthRoute'
import { paths } from '../paths'

export const AdminArticleCreatePageRoute: React.FC = () => (
  <AuthRoute
    exact
    path={paths.ADMIN_CREATE_ARTICLE}
    component={AdminArticleCreatePage}
  />
)
