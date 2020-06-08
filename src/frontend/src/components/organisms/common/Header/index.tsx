import React from 'react'

import * as S from './index.styled'
import TitleIcon from '@/components/molecules/header/TitleIcon'

const Header: React.FC = () => (
  <S.Wrapper>
    <S.Item>
      <TitleIcon />
    </S.Item>
  </S.Wrapper>
)

export default Header
