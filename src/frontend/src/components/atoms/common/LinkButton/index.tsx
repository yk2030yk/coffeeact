import React from 'react'

import logoSrc from '@/assets/images/logo_b.png'
import * as S from './index.styled'

type Props = {
  text: string
  link: string
}

const LinkButton: React.FC<Props> = ({ text, link }) => (
  <S.TopButton to={link}>{text}</S.TopButton>
)

export default LinkButton
