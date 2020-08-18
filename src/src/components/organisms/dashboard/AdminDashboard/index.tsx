import React from 'react'

import * as S from './styled'
import { ArticlePvSummary } from '@/components/molecules/dashboard/ArticlePvSummary'
import { DummyChart } from './chart'

type Props = {}

export const AdminDashboard: React.FC<Props> = () => {
  return (
    <S.Wrapper>
      <S.DummyCard>
        <ArticlePvSummary />
      </S.DummyCard>
      <S.DummyCard />
      <S.DummyCard />
      <S.DummyCard />
      <S.GraphCard>
        <DummyChart />
      </S.GraphCard>
    </S.Wrapper>
  )
}
