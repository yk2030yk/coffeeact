import React from 'react'

import * as S from './index.styled'
import Header from '@/components/organisms/common/Header'
import HomeHeader from '@/components/organisms/common/HomeHeader'
import Footer from '@/components/organisms/common/Footer'

const Template: React.FC = ({ children }) => (
  <S.Wrapper>
    <S.HeaderArea>
      <Header />
    </S.HeaderArea>
    <S.HomeHeaderArea>
      <HomeHeader />
    </S.HomeHeaderArea>
    <S.ContentArea>{children}</S.ContentArea>
    <S.FooterArea>
      <Footer />
    </S.FooterArea>
  </S.Wrapper>
)

export default Template
