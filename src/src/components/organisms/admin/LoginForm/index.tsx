import React from 'react'

import { LoginFormPresenter } from './presenter'
import { useProps } from './hooks'

export const LoginForm: React.FC = () => {
  return <LoginFormPresenter {...useProps()} />
}
