import React from 'react'
import { FormattedMessage } from 'react-intl'

import { Title } from '@/components/atoms'

const TitleIcon: React.FC = () => (
  <Title>
    <FormattedMessage id="app.name" />
  </Title>
)

export default TitleIcon
