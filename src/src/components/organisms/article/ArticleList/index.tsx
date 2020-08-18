import React from 'react'
import { useRecoilValue } from 'recoil'

import { ArticleListPresenter } from './presenter'
import {
  articlesState,
  useArticles,
  useArticlePaging,
} from '@/recoil/articlePaging'
import { loadableSelector } from '@/recoil/loadable'
import { Article } from '@/models'

type Props = {
  ArticleCardsComponent: React.FC<{ articles: Article[] }>
  LoadingPlaceholderComponent: React.FC<{ length?: number }>
  isShowPager?: boolean
}

export const ArticleList: React.FC<Props> = (props) => {
  useArticlePaging()
  useArticles()

  const articles = useRecoilValue(articlesState)
  const loadable = useRecoilValue(loadableSelector('articles'))

  return (
    <ArticleListPresenter {...props} articles={articles} loadable={loadable} />
  )
}
