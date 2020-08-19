import AboutPage from '@/components/pages/about/AboutPage'
import { createRouteConfig } from '../routeConfig'

export const AboutPageRoute = createRouteConfig({
  name: 'Aboutページ',
  path: '/about',
  component: AboutPage,
})
