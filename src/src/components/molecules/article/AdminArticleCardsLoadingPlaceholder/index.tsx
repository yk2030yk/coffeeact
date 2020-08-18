import React from 'react'

import * as S from './styled'
import { AdminArticleCardLoadingPlaceholder } from '../AdminArticleCardLoadingPlaceholder'

export const AdminArticleCardsLoadingPlaceholder: React.FC<{
  length?: number
}> = ({ length = 3 }) => {
  return (
    <S.Cards>
      {[...Array(length)].map((_, i) => (
        <AdminArticleCardLoadingPlaceholder key={i} />
      ))}
    </S.Cards>
  )
}
