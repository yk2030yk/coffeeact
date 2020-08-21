import React from 'react'

import * as S from './styled'
import { FormattedMessage } from '@/components/atoms'

const AppName: React.FC = () => {
  return (
    <S.Wrapper>
      <FormattedMessage id="app.name" />
    </S.Wrapper>
  )
}

export default AppName
