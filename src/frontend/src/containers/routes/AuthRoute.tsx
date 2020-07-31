import React from 'react'
import AppRoute from './AppRoute'
import { Redirect, RouteProps } from 'react-router-dom'

import { useAppContext } from '@/contexts/AppContext'
import { SIGN_IN_STATUS } from '@/hooks/auth/useAuth'
import LoadingPage from '../pages/global/LoadingPage'

type Props = {
  component: any
} & RouteProps

const AuthRoute: React.FC<Props> = ({ component: Component, ...props }) => {
  const { signInStatus } = useAppContext()

  if (signInStatus === SIGN_IN_STATUS.SIGN_IN) {
    return <AppRoute component={Component} {...props} />
  } else if (signInStatus === SIGN_IN_STATUS.SIGN_OUT) {
    return <Redirect to="/admin/login" />
  } else if (signInStatus === SIGN_IN_STATUS.NONE) {
    return <AppRoute component={LoadingPage} />
  }

  throw new Error()
}

export default AuthRoute
