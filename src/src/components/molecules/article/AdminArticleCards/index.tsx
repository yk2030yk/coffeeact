import React from 'react'

import { AdminArticleCardsPresenter } from './presenter'
import { Article } from '@/models'

type Props = {
  articles: Article[]
}

export const AdminArticleCards: React.FC<Props> = (props) => (
  <AdminArticleCardsPresenter {...props} />
)
