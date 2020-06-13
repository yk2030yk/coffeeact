import React from 'react'

import * as S from './index.styled'
import { AppIcon } from '@/components/atoms/common'

const TitleIcon: React.FC = () => (
  <S.Title to="/">
    <AppIcon height={50} />
  </S.Title>
)

export default TitleIcon
