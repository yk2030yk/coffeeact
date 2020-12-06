import React from 'react'
import { useParams } from 'react-router-dom'

import * as S from './styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import { ArticleContentBox } from '@/components/organisms/article/ArticleContentBox'
import { useArticle } from '@/recoil/article'
import { useArticlePageView } from '@/hooks/useArticlePageView'

export const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>()
  useArticle(articleId)
  useArticlePageView(articleId)

  return (
    <DefaultTemplate>
      <S.Wrapper>
        <ArticleContentBox />
      </S.Wrapper>
    </DefaultTemplate>
  )
}
