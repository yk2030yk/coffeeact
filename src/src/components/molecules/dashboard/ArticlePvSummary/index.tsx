import React from 'react'

import { ArticlePvSummaryPresenter } from './presenter'
import { useProps } from './hooks'

export const ArticlePvSummary: React.FC = () => (
  <ArticlePvSummaryPresenter {...useProps()} />
)
