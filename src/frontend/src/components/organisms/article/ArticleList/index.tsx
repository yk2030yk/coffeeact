import React from 'react'
import { useRecoilValue } from 'recoil'

import { NotFoundArticle } from '@/components/molecules/article'
import { articlesState, useArticles } from '@/recoil/articlePaging'
import { loadableSelector } from '@/recoil/loadable'
import { Article } from '@/models/Article'

type Props = {
  ArticleCardsComponent: React.FC<{ articles: Article[] }>
  LoadingPlaceholderComponent: React.FC<{ length?: number }>
}

export const ArticleList: React.FC<Props> = ({
  ArticleCardsComponent,
  LoadingPlaceholderComponent,
}) => {
  useArticles()

  const articles = useRecoilValue(articlesState)
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
