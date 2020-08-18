import React from 'react'

import * as S from './styled'
import { CurrentArticleCardLoadingPlaceholder } from '../CurrentArticleCardLoadingPlaceholder'

export const CurrentArticleCardsLoadingPlaceholder: React.FC<{
  length?: number
}> = ({ length = 3 }) => {
  return (
    <S.Cards>
      {[...Array(length)].map((_, i) => (
        <CurrentArticleCardLoadingPlaceholder key={i} />
      ))}
    </S.Cards>
  )
}
