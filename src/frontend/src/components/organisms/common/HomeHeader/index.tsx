import React from 'react'

import bgSrc from '@/assets/images/homeHeader.jpg'
import * as S from './index.styled'
import AppName from '@/components/molecules/header/AppName'

const Header: React.FC = () => (
  <S.Wrapper bgSrc={bgSrc}>
    <S.Overlay>
      <S.Item>
        <AppName />
      </S.Item>
    </S.Overlay>
  </S.Wrapper>
)

export default Header
