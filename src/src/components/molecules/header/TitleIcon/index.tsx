import React from 'react'

import * as S from './styled'
import { AppIcon } from '@/components/atoms'
import { HomePageRoute } from '@/components/App/Routes/pageRoutes'

const TitleIcon: React.FC = () => (
  <S.Title to={HomePageRoute.formatPath()}>
    <AppIcon height={50} />
  </S.Title>
)

export default TitleIcon
