import React from 'react'

import * as S from './index.styled'
import { ArticleCardLoadingPlaceholder } from '../ArticleCardLoadingPlaceholder'

export const ArticleCardsLoadingPlaceholder: React.FC<{ length?: number }> = ({
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
