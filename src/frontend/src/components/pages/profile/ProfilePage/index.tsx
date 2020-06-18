import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import ProfileMessage from '@/components/organisms/profile/ProfileMessage'

const Page: React.FC = () => (
  <DefaultTemplate>
    <S.Wrapper>
      <ProfileMessage />
    </S.Wrapper>
  </DefaultTemplate>
)

export default Page
