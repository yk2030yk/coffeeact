import React from 'react'

import { CurrentArticleCardsPresenter } from './presenter'
import { Article } from '@/models'

type Props = {
  articles: Article[]
}

export const CurrentArticleCards: React.FC<Props> = (props) => (
  <CurrentArticleCardsPresenter {...props} />
)
