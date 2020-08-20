import React from 'react'

import { Article } from '@/models'
import { ArticleCardsPresenter } from './presenter'

type Props = {
  articles: Article[]
}

export const ArticleCards: React.FC<Props> = (props) => (
  <ArticleCardsPresenter {...props} />
)
