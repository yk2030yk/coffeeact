import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import CircularProgress from '@/components/organisms/loading/CircularProgress'

const Page: React.FC = () => (
  <DefaultTemplate>
    <S.Wrapper>
      <CircularProgress />
    </S.Wrapper>
  </DefaultTemplate>
)

export default Page
