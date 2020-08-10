import React from 'react'

import HomePage from '@/components/pages/home/HomePage'
import { AppRoute } from '../AppRoute'
import { paths } from '../paths'

export const HomePageRoute: React.FC = () => (
  <AppRoute exact path={paths.STANDARD_HOME} component={HomePage} />
)
