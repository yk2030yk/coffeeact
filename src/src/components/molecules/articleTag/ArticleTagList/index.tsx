import React from 'react'

import { ArticleTagListPresenter } from './presenter'
import { useProps } from './hooks'

export const ArticleTagList: React.FC = () => (
  <ArticleTagListPresenter {...useProps()} />
)
