import React from 'react'

import * as S from './DefaultLayout.styled'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <S.HeaderContent></S.HeaderContent>
      <S.MainContent>{children}</S.MainContent>
    </S.Wrapper>
  )
}

export default DefaultLayout
