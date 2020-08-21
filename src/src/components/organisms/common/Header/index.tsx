import React from 'react'

import { HeaderPresenter } from './presenter'
import { useProps } from './hooks'

export const Header: React.FC = () => {
  return <HeaderPresenter {...useProps()} />
}
