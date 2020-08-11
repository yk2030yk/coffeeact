import React, { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import { Input } from '@/components/atoms'
import { loginEmailState } from '@/recoil/auth'

export const InputEmail: React.FC = () => {
  const [email, setEmail] = useRecoilState(loginEmailState)
  const resetEmail = useResetRecoilState(loginEmailState)

  useEffect(() => {
    return () => resetEmail()
  }, [resetEmail])

  return (
    <Input
      type="email"
      defaultValue={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  )
}
