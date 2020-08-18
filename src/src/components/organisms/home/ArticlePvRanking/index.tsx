import React from 'react'

import { useArticlePvRanking } from '@/hooks/useArticlePvRanking'
import { ArticlePvRankingPresenter } from './presenter'

export const ArticlePvRanking: React.FC = () => {
  const { articles } = useArticlePvRanking()
  return <ArticlePvRankingPresenter articles={articles} />
}
