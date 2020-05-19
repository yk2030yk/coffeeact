import React from 'react'
import { Switch } from 'react-router-dom'

import AppRoute from './AppRoute'
import HomePage from '../pages/HomePage'
import FatalErrorPage from '../pages/FatalErrorPage'
import NotFoundPage from '../pages/NotFoundPage'

const RootRoutes: React.FC = () => {
  return (
    <Switch>
      <AppRoute exact path="/error" component={FatalErrorPage} />
      <AppRoute exact path="/" component={HomePage} />
      <AppRoute exact path="*" component={NotFoundPage} />
    </Switch>
  )
}

export default RootRoutes
