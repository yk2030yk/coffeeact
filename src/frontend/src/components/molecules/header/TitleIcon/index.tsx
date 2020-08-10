import React from 'react'

import * as S from './index.styled'
import { AppIcon } from '@/components/atoms'
import { formatPath } from '@/containers/routes/pageRoutes/HomePageRoute'

const TitleIcon: React.FC = () => (
  <S.Title to={formatPath()}>
    <AppIcon height={50} />
  </S.Title>
)

export default TitleIcon
