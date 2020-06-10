import React from 'react'
import AppRoute from './AppRoute'
import { Redirect, RouteProps } from 'react-router-dom'

import { useAppContext } from '@/contexts/AppContext'
import { SIGN_IN_STATUS } from '@/hooks/auth/useAuth'

type Props = {
  component: any
} & RouteProps

const AuthRoute: React.FC<Props> = ({ component: Component, ...props }) => {
  const { signInStatus } = useAppContext()

  let comp
  if (signInStatus === SIGN_IN_STATUS.SIGN_IN) {
    comp = <AppRoute component={Component} {...props} />
  } else {
    comp = <Redirect to="/admin/login" />
  }

  return <>{comp}</>
}

export default AuthRoute
