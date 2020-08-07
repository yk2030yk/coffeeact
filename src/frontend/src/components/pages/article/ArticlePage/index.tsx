import React from 'react'
import { useParams } from 'react-router-dom'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import { ArticleContent } from '@/components/molecules/article'
import { useArticle } from '@/recoil/article'
import { useArticlePageView } from '@/hooks/articlePageView'

export const ArticlePage: React.FC = () => {
  const { articleId } = useParams()
  useArticle(articleId)
  useArticlePageView(articleId)

  return (
    <DefaultTemplate>
      <S.Wrapper>
        <ArticleContent />
      </S.Wrapper>
    </DefaultTemplate>
  )
}
