import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import { CircularProgress } from '@/components/atoms'

export const PageLoading: React.FC = () => (
  <DefaultTemplate>
    <S.Wrapper>
      <CircularProgress />
    </S.Wrapper>
  </DefaultTemplate>
)
