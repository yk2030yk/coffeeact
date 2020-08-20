import React from 'react'

import { Article } from '@/models'
import { ArticlePvRankingCardPresenter } from './presenter'

type Props = {
  rank: number
  article: Article
}

export const ArticlePvRankingCard: React.FC<Props> = (props) => (
  <ArticlePvRankingCardPresenter {...props} />
)
