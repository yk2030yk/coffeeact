import React from 'react'
import { useRecoilValueLoadable } from 'recoil'

import { LoadingPlaceholder } from '@/components/atoms'
import { NotFoundArticle } from '@/components/molecules/article'
import { filteredArticlesSelector } from '@/recoil/article/selectors'
import { Article } from '@/models/article/Article'

type Props = {
  ArticleCardsComponent: React.FC<{ articles: Article[] }>
}

export const ArticleList: React.FC<Props> = ({ ArticleCardsComponent }) => {
  const articlesLoadable = useRecoilValueLoadable(filteredArticlesSelector)

  switch (articlesLoadable.state) {
    case 'hasValue':
      if (articlesLoadable.contents.length === 0) {
        return <NotFoundArticle />
      } else {
        return <ArticleCardsComponent articles={articlesLoadable.contents} />
      }
    case 'loading':
      return <LoadingPlaceholder />
    case 'hasError':
      return null
    default:
      return null
  }
}
