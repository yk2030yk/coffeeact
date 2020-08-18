import React from 'react'

import * as S from './styled'
import { CircularProgress } from '@/components/atoms'

export const LoginLoading: React.FC = () => {
  return (
    <S.LoadingWrapper>
      <S.LoadingMessage>ログイン処理中です...</S.LoadingMessage>
      <CircularProgress />
    </S.LoadingWrapper>
  )
}
