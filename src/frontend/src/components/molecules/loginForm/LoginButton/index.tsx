import React from 'react'

import { Button } from '@/components/atoms'
import { useAuthLogin } from '@/recoil/auth'

export const LoginButton: React.FC = () => {
  const { execute } = useAuthLogin()
  return <Button onClick={() => execute()}>ログインする</Button>
}
