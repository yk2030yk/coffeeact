import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { SideMenuPresenter } from './presenter'

export const SideMenu: React.FC = () => {
  const history = useHistory()
  const { pathname } = useLocation()
  return <SideMenuPresenter history={history} pathname={pathname} />
}
