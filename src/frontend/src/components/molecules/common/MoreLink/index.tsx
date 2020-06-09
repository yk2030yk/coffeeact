import React from 'react'
import * as S from './index.styled'

type Props = {
  text: string
  link: string
}
const LinkList: React.FC<Props> = ({ text, link }) => (
  <S.Wrapper>
    <S.LinkText to={link}>{text}</S.LinkText>
  </S.Wrapper>
)

export default LinkList
