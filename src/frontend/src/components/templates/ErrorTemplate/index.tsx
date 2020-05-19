import React from 'react'

import * as S from './index.styled'
import { Text, Title } from '@/components/atoms'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

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
        <Title>{errorTitle}</Title>
      </S.ErrorTitle>
      <S.ErrorMessage>
        <Text>{errorMessage}</Text>
      </S.ErrorMessage>
      <S.ErrorContent>{children}</S.ErrorContent>
    </S.Content>
    <S.Footer>
      <Footer />
    </S.Footer>
  </S.Wrapper>
)

export default Template
