import React from 'react'

import * as S from './styled'

type Props = {
  text: string
  link: string
}

const LinkButton: React.FC<Props> = ({ text, link }) => (
  <S.TopButton to={link}>{text}</S.TopButton>
)

export default LinkButton
