import HomePage from '@/components/pages/home/HomePage'
import { createRouteConfig } from '../routeConfig'

export const HomePageRoute = createRouteConfig({
  name: 'トップページ',
  path: '/',
  component: HomePage,
})
