import React from 'react'

import { Article } from '@/models'
import { ArticlePvRankingCardsPresenter } from './presenter'

type Props = {
  articles: Article[]
}

export const ArticlePvRankingCards: React.FC<Props> = (props) => (
  <ArticlePvRankingCardsPresenter {...props} />
)
