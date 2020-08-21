import ProfilePage from '@/components/pages/profile/ProfilePage'
import { createRouteConfig } from '../routeConfig'

export const ProfilePageRoute = createRouteConfig({
  name: 'プロフィールページ',
  path: '/profile',
  component: ProfilePage,
})
