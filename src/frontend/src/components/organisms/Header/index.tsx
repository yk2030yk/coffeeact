import React from 'react'

import * as S from './index.styled'
import { Title, Link } from '@/components/atoms'
import { HeaderMenu } from '@/components/molecules/header'

const Header: React.FC = () => (
  <S.Wrapper>
    <S.Item>
      <Title>Preact</Title>
    </S.Item>
    <S.Item>
      <Link path="/">Home</Link>
    </S.Item>
    <S.Item>
      <HeaderMenu />
    </S.Item>
  </S.Wrapper>
)

export default Header
