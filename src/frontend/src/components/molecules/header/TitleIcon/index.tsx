import React from 'react'

import * as S from './index.styled'
import { AppIcon } from '@/components/atoms'

const TitleIcon: React.FC = () => (
  <S.Title to="/">
    <AppIcon height={50} />
  </S.Title>
)

export default TitleIcon
