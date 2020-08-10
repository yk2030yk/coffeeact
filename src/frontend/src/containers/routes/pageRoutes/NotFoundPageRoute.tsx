import React from 'react'

import NotFoundPage from '@/components/pages/error/NotFoundPage'
import { AppRoute } from '../AppRoute'
import { paths } from '../paths'

export const NotFoundPageRoute: React.FC = () => (
  <AppRoute exact path={paths.ALL} component={NotFoundPage} />
)
