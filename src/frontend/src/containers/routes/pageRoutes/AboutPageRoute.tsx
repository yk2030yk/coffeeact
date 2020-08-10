import React from 'react'

import AboutPage from '@/components/pages/about/AboutPage'
import { AppRoute } from '../AppRoute'
import { paths } from '../paths'

export const AboutPageRoute: React.FC = () => (
  <AppRoute exact path={paths.STANDARD_ABOUT} component={AboutPage} />
)
