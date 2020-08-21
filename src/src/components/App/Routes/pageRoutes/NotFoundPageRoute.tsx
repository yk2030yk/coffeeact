import NotFoundPage from '@/components/pages/error/NotFoundPage'
import { createRouteConfig } from '../routeConfig'

export const NotFoundPageRoute = createRouteConfig({
  name: '404ページ',
  path: '*',
  component: NotFoundPage,
})
