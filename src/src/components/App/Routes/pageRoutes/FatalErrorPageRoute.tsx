import FatalErrorPage from '@/components/pages/error/FatalErrorPage'
import { createRouteConfig } from '../routeConfig'

export const FatalErrorPageRoute = createRouteConfig({
  name: '500エラーページ',
  path: '/error',
  component: FatalErrorPage,
})
