import React from 'react'

import { AdminArticleTagEditorPage } from '@/components/pages/articleTag/AdminArticleTagEditorPage'
import { AuthRoute } from '../AuthRoute'
import { paths } from '../paths'

export const AdminArticleTagEditorPageRoute: React.FC = () => (
  <AuthRoute
    exact
    path={paths.ADMIN_MANAGE_TAG}
    component={AdminArticleTagEditorPage}
  />
)
