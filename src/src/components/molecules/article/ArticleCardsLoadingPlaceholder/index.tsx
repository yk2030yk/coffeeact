import React from 'react'

import { ArticleCardsLoadingPlaceholderPresenter } from './presenter'

type Props = {
  length?: number
}

export const ArticleCardsLoadingPlaceholder: React.FC<Props> = (props) => (
  <ArticleCardsLoadingPlaceholderPresenter {...props} />
)
