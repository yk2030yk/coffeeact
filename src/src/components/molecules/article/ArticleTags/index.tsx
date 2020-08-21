import React from 'react'

import { ArticleTagsPresenter } from './presenter'

type Props = {
  tags: string[]
}

export const ArticleTags: React.FC<Props> = (props) => (
  <ArticleTagsPresenter {...props} />
)
