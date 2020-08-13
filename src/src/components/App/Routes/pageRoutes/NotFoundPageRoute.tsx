import NotFoundPage from '@/components/pages/error/NotFoundPage'
import { createRouteConfig } from '../routeConfig'

export const NotFoundPageRoute = createRouteConfig({
  path: '*',
  component: NotFoundPage,
})
