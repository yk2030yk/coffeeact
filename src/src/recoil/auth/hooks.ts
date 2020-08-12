import { useEffect, useCallback } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom'

import {
  signInState,
  userState,
  authErrorState,
  loginEmailState,
  loginPasswordState,
  SIGN_IN_STATUS,
} from './atoms'
import { useAsyncTask } from '@/hooks/useAsyncTask'
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
    /* eslint react-hooks/exhaustive-deps: 0 */
  }, [])
}

export const useAuthLogin = () => {
  const history = useHistory()
  const setAuthError = useSetRecoilState(authErrorState)
  const email = useRecoilValue(loginEmailState)
  const password = useRecoilValue(loginPasswordState)

  return useAsyncTask(
    'login',
    useCallback(async () => {
      setAuthError(null)
      try {
        await authService.login(email, password)
      } catch (e) {
        setAuthError('入力された情報が間違っています。')
      }
      history.push('/admin/home')
    }, [history, email, password])
  )
}

export const useAuthLogout = () => {
  const history = useHistory()

  return useAsyncTask(
    'logout',
    useCallback(async () => {
      await authService.logout()
      history.push('/')
    }, [history])
  )
}
