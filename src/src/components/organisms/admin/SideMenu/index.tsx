import React from 'react'

import { SideMenuPresenter } from './presenter'
import { useProps } from './hooks'

export const SideMenu: React.FC = () => {
  return <SideMenuPresenter {...useProps()} />
}
