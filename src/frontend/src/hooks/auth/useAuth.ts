import { useState, useEffect, useCallback } from 'react'
import { User } from 'firebase'
import { useHistory } from 'react-router-dom'

import { useAsyncTask } from '@/hooks/common/useAsyncTask'
import { authService } from '@/service/auth/AuthService'

export const SIGN_IN_STATUS = {
  NONE: 'none',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
}

const codeToMessage: { [key: string]: string } = {}

const handleLoginError = (e: any) => {
  const code = (e.code || '') as string
  throw new Error(codeToMessage[code] || '入力された情報が間違っています。')
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

  const login = useAsyncTask(
    useCallback(
      async (email: string, password: string) => {
        try {
          await authService.login(email, password)
        } catch (e) {
          handleLoginError(e)
        }
        history.push('/admin/home')
      },
      [history]
    )
  )

  const logout = useAsyncTask(
    useCallback(async () => {
      await authService.logout()
      history.push('/')
    }, [history])
  )

  return { user, signInStatus, login, logout }
}
