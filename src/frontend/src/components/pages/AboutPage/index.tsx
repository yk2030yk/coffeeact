import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '../../templates/DefaultTemplate'
import AboutMessage from '@/components/molecules/about/AboutMessage'

const Page: React.FC = () => (
  <DefaultTemplate>
    <S.Wrapper>
      <AboutMessage />
    </S.Wrapper>
  </DefaultTemplate>
)

export default Page
