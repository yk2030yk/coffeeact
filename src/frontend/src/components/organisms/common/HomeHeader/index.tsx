import React from 'react'

import * as S from './index.styled'
import AppName from '@/components/molecules/header/AppName'

const Header: React.FC = () => (
  <S.Wrapper>
    <S.Item>
      <AppName />
    </S.Item>
  </S.Wrapper>
)

export default Header
