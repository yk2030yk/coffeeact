import React from 'react'
import { useRecoilValue } from 'recoil'

import { LoginFormPresenter } from './presenter'
import { loadableSelector } from '@/recoil/loadable'

export const LoginForm: React.FC = () => {
  const loadable = useRecoilValue(loadableSelector('login'))

  return <LoginFormPresenter loadable={loadable} />
}
