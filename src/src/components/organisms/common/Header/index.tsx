import React from 'react'
import { useRecoilValue } from 'recoil'

import { userState } from '@/recoil/auth'
import { HeaderPresenter } from './presenter'

export const Header: React.FC = () => {
  const user = useRecoilValue(userState)
  return <HeaderPresenter user={user} />
}
