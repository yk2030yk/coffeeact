import React from 'react'
import { useRecoilValueLoadable } from 'recoil'

import { LoadingPlaceholder } from '@/components/atoms'
import { ArticleCards } from '@/components/molecules/article/user'
import NotFoundArticle from '@/components/molecules/article/common/NotFoundArticle'
import { filteredArticlesSelector } from '@/recoil/article/selectors'

const ArticleList: React.FC = () => {
  const articlesLoadable = useRecoilValueLoadable(filteredArticlesSelector)

  switch (articlesLoadable.state) {
    case 'hasValue':
      if (articlesLoadable.contents.length === 0) {
        return <NotFoundArticle />
      } else {
        return <ArticleCards articles={articlesLoadable.contents} />
      }
    case 'loading':
      return <LoadingPlaceholder />
    case 'hasError':
      return null
    default:
      return null
  }
}

export default ArticleList
