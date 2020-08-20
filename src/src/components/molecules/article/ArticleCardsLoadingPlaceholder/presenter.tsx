import React from 'react'

import * as S from './styled'
import { ArticleCardLoadingPlaceholder } from '../ArticleCardLoadingPlaceholder'

type Props = {
  length?: number
}

export const ArticleCardsLoadingPlaceholderPresenter: React.FC<Props> = ({
  length = 3,
}) => {
  return (
    <S.Cards>
      {[...Array(length)].map((_, i) => (
        <ArticleCardLoadingPlaceholder key={i} />
      ))}
    </S.Cards>
  )
}
