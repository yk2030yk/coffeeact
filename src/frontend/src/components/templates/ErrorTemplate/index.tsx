import React from 'react'

import * as S from './index.styled'
import Header from '@/components/organisms/common/Header'
import Footer from '@/components/organisms/common/Footer'

type Props = {
  errorTitle: string
  errorMessage: string
}

const Template: React.FC<Props> = ({ errorTitle, errorMessage, children }) => (
  <S.Wrapper>
    <S.Header>
      <Header />
    </S.Header>
    <S.Content>
      <S.ErrorTitle>
        <S.Title>{errorTitle}</S.Title>
      </S.ErrorTitle>
      <S.ErrorMessage>
        <S.Text>{errorMessage}</S.Text>
      </S.ErrorMessage>
      <S.ErrorContent>{children}</S.ErrorContent>
    </S.Content>
    <S.Footer>
      <Footer />
    </S.Footer>
  </S.Wrapper>
)

export default Template
