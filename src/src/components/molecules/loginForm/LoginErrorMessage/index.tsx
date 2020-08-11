import React, { useEffect } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'

import { ErrorText, BasicBox } from '@/components/atoms'
import { authErrorState } from '@/recoil/auth'

export const LoginErrorMessage: React.FC = () => {
  const authError = useRecoilValue(authErrorState)
  const resetAuthError = useResetRecoilState(authErrorState)

  useEffect(() => {
    return () => resetAuthError()
  }, [resetAuthError])

  return (
    <>
      {authError && (
        <BasicBox>
          <ErrorText>{authError}</ErrorText>
        </BasicBox>
      )}
    </>
  )
}
