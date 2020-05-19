import React from 'react'
import { Switch } from 'react-router-dom'

import RootRoutes from './RootRoutes'

const Routes: React.FC = () => {
  return (
    <Switch>
      <RootRoutes />
    </Switch>
  )
}

export default Routes
