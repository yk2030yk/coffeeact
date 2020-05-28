import React from 'react'

import * as S from './index.styled'

const LinkCards: React.FC = ({ children }) => (
  <S.Wrapper>
    <S.Card>{children}</S.Card>
  </S.Wrapper>
)

export default LinkCards
