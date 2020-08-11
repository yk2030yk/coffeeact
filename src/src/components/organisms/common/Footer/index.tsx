import React from 'react'

import * as S from './index.styled'

import { AppIcon } from '@/components/atoms'
import LinkList from '@/components/molecules/footer/LinkList'

const Footer: React.FC = () => (
  <S.Wrapper>
    <S.AppIconArea>
      <AppIcon height={80} />
    </S.AppIconArea>
    <LinkList />
  </S.Wrapper>
)

export default Footer
