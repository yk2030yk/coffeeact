import React, { ReactElement } from 'react'

import * as S from './styled'
import Heading from '../Heading'
import FormattedMessage from '../FormattedMessage'

type Props = {
  id: string
  IconComponent: ReactElement
}

export const TitleWithIcon: React.FC<Props> = ({ IconComponent, id }) => {
  return (
    <S.Wrapper>
      <S.IconArea>{IconComponent}</S.IconArea>
      <Heading>
        <FormattedMessage id={id} />
      </Heading>
    </S.Wrapper>
  )
}
