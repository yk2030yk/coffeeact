import { useState, useEffect, useCallback } from 'react'
import { User } from 'firebase'
import { useHistory } from 'react-router-dom'

import { authService } from '@/service/auth/AuthService'

export const SIGN_IN_STATUS = {
  NONE: 'none',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
}

export const useAuth = () => {
  const history = useHistory()
  const [signInStatus, setSignInStatus] = useState<string>(SIGN_IN_STATUS.NONE)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    authService.onAuthStateChanged((u) => {
      setUser(u)
      setSignInStatus(u ? SIGN_IN_STATUS.SIGN_IN : SIGN_IN_STATUS.SIGN_OUT)
    })
  }, [])

  const login = useCallback(
    async (email: string, password: string) => {
      await authService.login(email, password)
      history.push('/admin/home')
    },
    [history]
  )

  const logout = useCallback(async () => {
    await authService.logout()
    history.push('/')
  }, [history])

  return { user, signInStatus, login, logout }
}
