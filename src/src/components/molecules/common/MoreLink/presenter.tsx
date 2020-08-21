import React from 'react'

import * as S from './styled'

type Props = {
  text: string
  link: string
}

export const MoreLinkPresenter: React.FC<Props> = ({ text, link }) => (
  <S.Wrapper>
    <S.LinkText to={link}>{text}</S.LinkText>
  </S.Wrapper>
)
