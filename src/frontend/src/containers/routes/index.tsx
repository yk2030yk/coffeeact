import React from 'react'
import { Switch } from 'react-router-dom'

import * as pageRoutes from './pageRoutes'
import { AppRoute } from './AppRoute'
import { AuthRoute } from './AuthRoute'
import { ROUTE_TYPE } from './routeConfig'
import { CoffeeActApplicationError } from '@/errors'

const Routes: React.FC = () => {
  return (
    <Switch>
      {Object.values(pageRoutes).map((routeConfig) => {
        switch (routeConfig.routeType) {
          case ROUTE_TYPE.STANDARD:
            return <AppRoute {...routeConfig} />
          case ROUTE_TYPE.ADMIN:
            return <AuthRoute {...routeConfig} />
          default:
            throw new CoffeeActApplicationError(
              `Not Match RouteType(${routeConfig})`
            )
        }
      })}
    </Switch>
  )
}

export default Routes
