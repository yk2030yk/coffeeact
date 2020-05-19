import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

type Props = {
  component: any
} & RouteProps

const AppRoute: React.FC<Props> = ({ component: Component, ...props }) => {
  return (
    <Route {...props}>
      <Component />
    </Route>
  )
}

export default AppRoute
