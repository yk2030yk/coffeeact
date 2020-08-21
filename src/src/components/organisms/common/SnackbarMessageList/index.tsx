import React from 'react'

import { SnackbarMessageListPresenter } from './presenter'
import { useProps } from './hooks'

export const SnackbarMessageList: React.FC = () => {
  return <SnackbarMessageListPresenter {...useProps()} />
}
