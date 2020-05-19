import React from 'react'

import * as S from './index.styled'

type Props = {
  errorTitle: string
  errorMessage: string
}

const Template: React.FC<Props> = ({ errorTitle, errorMessage, children }) => (
  <S.Wrapper>
    <div>{errorTitle}</div>
    <div>{errorMessage}</div>
    <div>{children}</div>
  </S.Wrapper>
)

export default Template
