import React from 'react'

import * as S from './index.styled'
import { ArticleSummary } from '@/components/molecules/dashboard/ArticleSummary'

type Props = {}

export const AdminDashboard: React.FC<Props> = () => {
  return (
    <S.Wrapper>
      <ArticleSummary />
    </S.Wrapper>
  )
}
