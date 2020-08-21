import React from 'react'

import * as S from './styled'
import { AdminArticleCardLoadingPlaceholder } from '../AdminArticleCardLoadingPlaceholder'

type Props = {
  length?: number
}

export const AdminArticleCardsLoadingPlaceholderPresenter: React.FC<Props> = ({
  length = 3,
}) => {
  return (
    <S.Cards>
      {[...Array(length)].map((_, i) => (
        <AdminArticleCardLoadingPlaceholder key={i} />
      ))}
    </S.Cards>
  )
}
