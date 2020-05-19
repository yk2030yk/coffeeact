import React from 'react'

import * as S from './index.styled'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

const Template: React.FC = ({ children }) => (
  <S.Wrapper>
    <Header />
    <div>{children}</div>
    <Footer />
  </S.Wrapper>
)

export default Template
