import React from 'react'
import { FormattedMessage } from 'react-intl'

import * as S from './index.styled'
import Circle from '@/components/atoms/animation/Circle'

const AppName: React.FC = () => {
  return (
    <S.Wrapper>
      <Circle>
        <FormattedMessage id="app.name" />
      </Circle>
    </S.Wrapper>
  )
}

export default AppName
