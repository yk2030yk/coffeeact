import React, { ReactNode } from 'react'

import { ArticleFormPresenter } from './presenter'
import { Article } from '@/models'

type Props = {
  article?: Article
  ActionButton: ReactNode
}

export const ArticleForm: React.FC<Props> = ({
  article = new Article(),
  ActionButton,
}) => <ArticleFormPresenter article={article} ActionButton={ActionButton} />
