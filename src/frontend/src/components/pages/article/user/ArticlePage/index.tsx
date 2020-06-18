import React from 'react'
import { useParams } from 'react-router-dom'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import ArticleContent from '@/components/molecules/article/user/ArticleContent'
import { useArticle } from '@/hooks/firestore/useArticle'

const Page: React.FC = () => {
  const { articleId } = useParams()
  const { article } = useArticle(articleId)
  return (
    <DefaultTemplate>
      <S.Wrapper>{article && <ArticleContent article={article} />}</S.Wrapper>
    </DefaultTemplate>
  )
}

export default Page
