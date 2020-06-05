import React from 'react'
import { useIntl } from 'react-intl'

import * as S from './index.styled'

type Props = {
  id: string
}

const Heading: React.FC<Props> = ({ id }) => {
  const { formatMessage } = useIntl()
  const message = formatMessage({ id })
  return <S.Heading>{message}</S.Heading>
}

export default Heading
