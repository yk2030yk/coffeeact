import React from 'react'

import { ArticleListPresenter } from './presenter'
import { useProps } from './hooks'
import { Article } from '@/models'

type Props = {
  ArticleCardsComponent: React.FC<{ articles: Article[] }>
  LoadingPlaceholderComponent: React.FC<{ length?: number }>
  isShowPager?: boolean
}

export const ArticleList: React.FC<Props> = (props) => {
  return <ArticleListPresenter {...props} {...useProps()} />
}
