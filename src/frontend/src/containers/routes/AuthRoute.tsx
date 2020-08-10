import React from 'react'
import { useRecoilValue } from 'recoil'
import { Redirect, RouteProps } from 'react-router-dom'

import { AppRoute } from './AppRoute'
import { CoffeeActApplicationError } from '@/errors'
import { SIGN_IN_STATUS, signInState } from '@/recoil/auth'
import LoadingPage from '../pages/global/LoadingPage'

type Props = {
  component: any
} & RouteProps

export const AuthRoute: React.FC<Props> = ({
  component: Component,
  ...props
}) => {
  const signInStatus = useRecoilValue(signInState)

  switch (signInStatus) {
    case SIGN_IN_STATUS.SIGN_IN:
      return <AppRoute component={Component} {...props} />
    case SIGN_IN_STATUS.SIGN_OUT:
      return <Redirect to="/login" />
    case SIGN_IN_STATUS.NONE:
      return <AppRoute component={LoadingPage} />
    default:
      throw new CoffeeActApplicationError(
        `signInStatusが不正の値です(${signInStatus})`
      )
  }
}
