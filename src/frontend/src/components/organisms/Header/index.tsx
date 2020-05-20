import React from 'react'

import * as S from './index.styled'
import { HeaderMenu, TitleIcon, LinkList } from '@/components/molecules/header'

const Header: React.FC = () => (
  <S.Wrapper>
    <S.Item>
      <TitleIcon />
    </S.Item>
    <S.Item>
      <LinkList />
    </S.Item>
    <S.Item>
      <HeaderMenu />
    </S.Item>
  </S.Wrapper>
)

export default Header
