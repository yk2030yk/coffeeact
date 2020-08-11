import React, { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import { Input } from '@/components/atoms'
import { loginPasswordState } from '@/recoil/auth'

export const InputPassword: React.FC = () => {
  const [password, setPassword] = useRecoilState(loginPasswordState)
  const resetPassword = useResetRecoilState(loginPasswordState)

  useEffect(() => {
    return () => resetPassword()
  }, [resetPassword])

  return (
    <Input
      type="password"
      defaultValue={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  )
}
