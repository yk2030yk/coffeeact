import React from 'react'

import * as S from './styled'
import { CurrentArticleCardLoadingPlaceholder } from '../CurrentArticleCardLoadingPlaceholder'

type Props = {
  length?: number
}

export const CurrentArticleCardsLoadingPlaceholderPresenter: React.FC<Props> = ({
  length = 3,
}) => {
  return (
    <S.Cards>
      {[...Array(length)].map((_, i) => (
        <CurrentArticleCardLoadingPlaceholder key={i} />
      ))}
    </S.Cards>
  )
}
