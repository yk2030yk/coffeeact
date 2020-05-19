import React from 'react'

import AppRoute from './AppRoute'
import HomePage from '../pages/HomePage'

const RootRoutes: React.FC = () => {
  return (
    <>
      <AppRoute path="/" component={HomePage} />
    </>
  )
}

export default RootRoutes
