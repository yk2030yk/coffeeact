import React from 'react'
import { FormattedMessage } from 'react-intl'

import logoSrc from '@/assets/images/logo.png'
import * as S from './index.styled'

const TitleIcon: React.FC = () => (
  <S.Title to="/">
    <S.Img src={logoSrc} />
  </S.Title>
)

export default TitleIcon
