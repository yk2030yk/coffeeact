import React from 'react'
import { useRecoilValue } from 'recoil'

import {
  NotFoundArticle,
  ArticleCardsLoadingPlaceholder,
} from '@/components/molecules/article'
import { filteredArticlesSelector } from '@/recoil/article/selectors'
import { loadableSelector } from '@/recoil/global/loadable/atoms'
import { Article } from '@/models/article/Article'

type Props = {
  ArticleCardsComponent: React.FC<{ articles: Article[] }>
}

export const ArticleList: React.FC<Props> = ({ ArticleCardsComponent }) => {
  const articles = useRecoilValue(filteredArticlesSelector)
  const loadable = useRecoilValue(loadableSelector('articles'))

  if (loadable.isLoaded()) {
    if (articles.length === 0) {
      return <NotFoundArticle />
    } else {
      return <ArticleCardsComponent articles={articles} />
    }
  } else if (loadable.isLoading()) {
    return <ArticleCardsLoadingPlaceholder length={10} />
  } else {
    return null
  }
}
