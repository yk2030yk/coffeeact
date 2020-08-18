import React from 'react'

import * as S from './styled'
import { Header } from '@/components/organisms/common/Header'
import { Footer } from '@/components/organisms/common/Footer'

const Template: React.FC = ({ children }) => (
  <S.Wrapper>
    <S.Header>
      <Header />
    </S.Header>
    <S.Content>{children}</S.Content>
    <S.Footer>
      <Footer />
    </S.Footer>
  </S.Wrapper>
)

export default Template
