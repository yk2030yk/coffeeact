import React from 'react'

import FatalErrorPage from '@/components/pages/error/FatalErrorPage'
import { AppRoute } from '../AppRoute'
import { paths } from '../paths'

export const FatalErrorPageRoute: React.FC = () => (
  <AppRoute exact path={paths.STANDARD_ERROR} component={FatalErrorPage} />
)
