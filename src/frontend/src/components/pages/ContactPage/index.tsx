import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '../../templates/DefaultTemplate'
import Profile from '@/components/organisms/contact/Profile'

const Page: React.FC = () => (
  <DefaultTemplate>
    <S.Wrapper>
      <Profile />
    </S.Wrapper>
  </DefaultTemplate>
)

export default Page
