import React from 'react'

import logoSrc from '@/assets/images/logo.png'
import * as S from './index.styled'

const FooterIcon: React.FC = () => (
  <S.Wrapper>
    <S.Img src={logoSrc} />
  </S.Wrapper>
)

export default FooterIcon
