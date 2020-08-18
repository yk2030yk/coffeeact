import React from 'react'

import { NotFoundArticle, ArticlePager } from '@/components/molecules/article'
import { Article, Loadable } from '@/models'

type PresenterProps = {
  ArticleCardsComponent: React.FC<{ articles: Article[] }>
  LoadingPlaceholderComponent: React.FC<{ length?: number }>
  isShowPager?: boolean
  articles: Article[]
  loadable: Loadable
}

export const ArticleListPresenter: React.FC<PresenterProps> = ({
  ArticleCardsComponent,
  LoadingPlaceholderComponent,
  isShowPager = true,
  articles,
  loadable,
}) => {
  if (loadable.isLoaded) {
    if (articles.length === 0) {
      return <NotFoundArticle />
    } else {
      return (
        <>
          <ArticleCardsComponent articles={articles} />
          {isShowPager && <ArticlePager />}
        </>
      )
    }
  } else if (loadable.isLoading || loadable.isBeforeLoad) {
    return <LoadingPlaceholderComponent length={10} />
  } else {
    return null
  }
}
