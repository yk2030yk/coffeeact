import React from 'react'

import ProfilePage from '@/components/pages/profile/ProfilePage'
import { AppRoute } from '../AppRoute'
import { paths } from '../paths'

export const ProfilePageRoute: React.FC = () => (
  <AppRoute exact path={paths.STANDARD_PROFILE} component={ProfilePage} />
)
