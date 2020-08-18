import React from 'react'
import { useRecoilValue } from 'recoil'

import { NotFoundArticle, ArticlePager } from '@/components/molecules/article'
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

export const ArticleList: React.FC<Props> = ({
  ArticleCardsComponent,
  LoadingPlaceholderComponent,
  isShowPager = true,
}) => {
  useArticlePaging()
  useArticles()

  const articles = useRecoilValue(articlesState)
  const loadable = useRecoilValue(loadableSelector('articles'))

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
