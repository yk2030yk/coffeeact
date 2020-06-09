import React from 'react'

import * as S from './index.styled'
import HomeHeader from '@/components/organisms/common/HomeHeader'
import Footer from '@/components/organisms/common/Footer'

const Template: React.FC = ({ children }) => (
  <S.Wrapper>
    <S.HeaderArea>
      <HomeHeader />
    </S.HeaderArea>
    <S.ContentArea>{children}</S.ContentArea>
    <S.FooterArea>
      <Footer />
    </S.FooterArea>
  </S.Wrapper>
)

export default Template
