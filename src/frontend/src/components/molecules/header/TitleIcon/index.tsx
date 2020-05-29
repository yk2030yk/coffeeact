import React from 'react'

import logoSrc from '@/assets/images/logo_b.png'
import * as S from './index.styled'

const TitleIcon: React.FC = () => (
  <S.Title to="/">
    <S.Img src={logoSrc} />
  </S.Title>
)

export default TitleIcon
