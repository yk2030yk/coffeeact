import React from 'react'

import LoginPage from '@/components/pages/admin/LoginPage'
import { AppRoute } from '../AppRoute'
import { paths } from '../paths'

export const LoginPageRoute: React.FC = () => (
  <AppRoute exact path={paths.STANDARD_LOGIN} component={LoginPage} />
)
