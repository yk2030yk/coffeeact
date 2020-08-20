import React from 'react'

import { ArticleContentPresenter } from './presenter'
import { useProps } from './hooks'

export const ArticleContent: React.FC = () => (
  <ArticleContentPresenter {...useProps()} />
)
