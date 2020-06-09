import React from 'react'
import { FormattedMessage } from 'react-intl'

import * as S from './index.styled'

const AppName: React.FC = () => (
  <S.Wrapper>
    <FormattedMessage id="app.name" />
  </S.Wrapper>
)

export default AppName
