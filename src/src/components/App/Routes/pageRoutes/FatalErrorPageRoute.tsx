import FatalErrorPage from '@/components/pages/error/FatalErrorPage'
import { createRouteConfig } from '../routeConfig'

export const FatalErrorPageRoute = createRouteConfig({
  path: '/error',
  component: FatalErrorPage,
})
