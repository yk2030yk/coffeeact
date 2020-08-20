import React from 'react'

import { ArticleCardPresenter } from './presenter'
import { Article } from '@/models'

type Props = {
  article: Article
}

export const ArticleCard: React.FC<Props> = (props) => (
  <ArticleCardPresenter {...props} />
)
