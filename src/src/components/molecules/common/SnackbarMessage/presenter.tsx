import React from 'react'
import { IconType } from 'react-icons'

import * as S from './styled'
import { Text } from '@/components/atoms'

type Props = {
  Icon: IconType
  color: string
  message: string
}

export const SnackbarMessagePresenter: React.FC<Props> = ({
  Icon,
  color,
  message,
}) => (
  <S.Wrapper color={color}>
    <Icon size={30} />
    <Text>{message}</Text>
  </S.Wrapper>
)
