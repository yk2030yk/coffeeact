import React from 'react'

import { ArticlePvRankingPresenter } from './presenter'
import { useProps } from './hooks'

export const ArticlePvRanking: React.FC = () => {
  return <ArticlePvRankingPresenter {...useProps()} />
}
