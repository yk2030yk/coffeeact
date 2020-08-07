import React from 'react'
import { useRecoilValue } from 'recoil'

import { NotFoundArticle } from '@/components/molecules/article'
import { filteredArticlesSelector, useArticles } from '@/recoil/article'
import { loadableSelector } from '@/recoil/global/loadable'
import { Article } from '@/models/Article'
import { GetListCondition } from '@/service/firestore/ArticleService'

type Props = {
  ArticleCardsComponent: React.FC<{ articles: Article[] }>
  LoadingPlaceholderComponent: React.FC<{ length?: number }>
  condition: GetListCondition
}

export const ArticleList: React.FC<Props> = ({
  ArticleCardsComponent,
  LoadingPlaceholderComponent,
  condition,
}) => {
  useArticles(condition)
  const articles = useRecoilValue(filteredArticlesSelector)
  const loadable = useRecoilValue(loadableSelector('articles'))

  if (loadable.isLoaded()) {
    if (articles.length === 0) {
      return <NotFoundArticle />
    } else {
      return <ArticleCardsComponent articles={articles} />
    }
  } else if (loadable.isLoading()) {
    return <LoadingPlaceholderComponent length={10} />
  } else {
    return null
  }
}
