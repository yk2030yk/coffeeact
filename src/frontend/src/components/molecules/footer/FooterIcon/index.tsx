import React from 'react'
import { FormattedMessage } from 'react-intl'

import * as S from './index.styled'

const FooterIcon: React.FC = () => (
  <S.Title>
    <FormattedMessage id="app.name" />
  </S.Title>
)

export default FooterIcon
