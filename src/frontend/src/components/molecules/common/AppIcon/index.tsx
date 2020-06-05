import React from 'react'

import logoSrc from '@/assets/images/logo_b.png'
import * as S from './index.styled'

type Props = {
  height?: number
}

const FooterIcon: React.FC<Props> = ({ height = 80 }) => (
  <S.Wrapper>
    <S.Img src={logoSrc} height={height} />
  </S.Wrapper>
)

export default FooterIcon
