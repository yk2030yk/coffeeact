import React from 'react'

import logoSrc from '@/assets/images/logo_b.png'
import * as S from './index.styled'

type Props = {
  height?: number
}

const FooterIcon: React.FC<Props> = ({ height = 80 }) => (
  <S.Img src={logoSrc} height={height} />
)

export default FooterIcon
