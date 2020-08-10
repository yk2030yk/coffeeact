import ProfilePage from '@/components/pages/profile/ProfilePage'
import {
  createRouteConfig,
  ROUTE_TYPE,
  formatPathByRouteConfig,
} from '../routeConfig'

export const ProfilePageRoute = createRouteConfig(
  ROUTE_TYPE.STANDARD,
  '/profile',
  ProfilePage,
  true
)

export const formatPath = () => formatPathByRouteConfig(ProfilePageRoute)
