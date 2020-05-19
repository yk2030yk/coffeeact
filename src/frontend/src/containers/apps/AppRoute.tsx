import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

import DefaultLayout from '@/containers/layouts/DefaultLayout'

type Props = {
  layout?: any
  component: any
  children?: React.ReactNode
} & RouteProps

const AppRoute: React.FC<Props> = ({
  layout: Layout = DefaultLayout,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props): JSX.Element => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    )}
  />
)

export default AppRoute
