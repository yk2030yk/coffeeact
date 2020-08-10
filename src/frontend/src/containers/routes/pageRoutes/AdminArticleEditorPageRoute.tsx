import React from 'react'

import { AdminArticleEditorPage } from '@/components/pages/article/AdminArticleEditorPage'
import { AuthRoute } from '../AuthRoute'
import { paths } from '../paths'

export const AdminArticleEditorPageRoute: React.FC = () => (
  <AuthRoute
    exact
    path={paths.ADMIN_EDIT_ARTICLE}
    component={AdminArticleEditorPage}
  />
)
