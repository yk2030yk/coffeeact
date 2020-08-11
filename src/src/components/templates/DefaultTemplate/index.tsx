import React from 'react'

import * as S from './index.styled'
import CommonTemplate from '../CommonTemplate'
import Header from '@/components/organisms/common/Header'
import Footer from '@/components/organisms/common/Footer'

const Template: React.FC = ({ children }) => (
  <CommonTemplate>
    <S.Wrapper>
      <S.HeaderArea>
        <Header />
      </S.HeaderArea>
      <S.ContentAreaWrapper>
        <S.ContentArea>{children}</S.ContentArea>
      </S.ContentAreaWrapper>
      <S.FooterArea>
        <Footer />
      </S.FooterArea>
    </S.Wrapper>
  </CommonTemplate>
)

export default Template
