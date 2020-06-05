import React from 'react'

import * as S from './index.styled'
import AppIcon from '@/components/molecules/common/AppIcon'

const TitleIcon: React.FC = () => (
  <S.Title to="/">
    <AppIcon height={50} />
  </S.Title>
)

export default TitleIcon
