import React, { ReactElement } from 'react'

import * as S from './styled'
import { FormattedMessage } from '@/components/atoms'

type Props = {
  id: string
  IconComponent: ReactElement
}

export const SideContentTitle: React.FC<Props> = ({ IconComponent, id }) => {
  return (
    <S.Wrapper>
      <S.IconArea>{IconComponent}</S.IconArea>
      <S.Heading>
        <FormattedMessage id={id} />
      </S.Heading>
    </S.Wrapper>
  )
}
