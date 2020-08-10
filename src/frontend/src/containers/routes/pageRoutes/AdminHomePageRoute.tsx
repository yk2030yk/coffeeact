import React from 'react'

import AdminHomePage from '@/components/pages/admin/AdminHomePage'
import { AuthRoute } from '../AuthRoute'
import { paths } from '../paths'

export const AdminHomePageRoute: React.FC = () => (
  <AuthRoute exact path={paths.ADMIN_HOME} component={AdminHomePage} />
)
