import { useState, useEffect, useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { useHistory } from 'react-router-dom'

import { signInState, userState, SIGN_IN_STATUS } from './atoms'
import { useAsyncTask } from '@/hooks/common/useAsyncTask'
import { authService } from '@/service/auth/AuthService'
import { User } from '@/models/User'

export const useOnAuthStateChanged = () => {
  const setSignInStatus = useSetRecoilState(signInState)
  const setUser = useSetRecoilState(userState)

  useEffect(() => {
    authService.onAuthStateChanged((u) => {
      setUser(u ? new User() : null)
      setSignInStatus(u ? SIGN_IN_STATUS.SIGN_IN : SIGN_IN_STATUS.SIGN_OUT)
    })
  }, [])
}

const codeToMessage: { [key: string]: string } = {}

const handleLoginError = (e: any) => {
  const code = (e.code || '') as string
  throw new Error(codeToMessage[code] || '入力された情報が間違っています。')
}

export const useAuthLogin = () => {
  const history = useHistory()

  const login = useAsyncTask(
    'login',
    useCallback(
      async (email: string, password: string) => {
        try {
          await authService.login(email, password)
        } catch (e) {
          console.log(e)
          handleLoginError(e)
        }
        history.push('/admin/home')
      },
      [history]
    )
  )

  return login
}

export const useAuthLogout = () => {
  const history = useHistory()

  const logout = useAsyncTask(
    'logout',
    useCallback(async () => {
      await authService.logout()
      history.push('/')
    }, [history])
  )

  return logout
}
