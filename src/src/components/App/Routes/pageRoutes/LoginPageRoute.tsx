import LoginPage from '@/components/pages/admin/LoginPage'
import { createRouteConfig } from '../routeConfig'

export const LoginPageRoute = createRouteConfig({
  name: 'ログインページ',
  path: '/login',
  component: LoginPage,
})
