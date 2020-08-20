import React from 'react'

import { AdminArticleCardPresenter } from './presenter'
import { Article } from '@/models'

type Props = {
  article: Article
}

export const AdminArticleCard: React.FC<Props> = (props) => (
  <AdminArticleCardPresenter {...props} />
)
