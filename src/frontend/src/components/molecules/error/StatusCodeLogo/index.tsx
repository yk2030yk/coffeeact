import React from 'react'

import * as S from './index.styled'

type Props = {
  statusCode: number
  text: string
}

const Page: React.FC<Props> = ({ statusCode, text }) => (
  <S.ErrorLogo>
    <S.StatusCode>{statusCode}</S.StatusCode>
    <S.StatusLogoMessage>{text}</S.StatusLogoMessage>
  </S.ErrorLogo>
)

export default Page
