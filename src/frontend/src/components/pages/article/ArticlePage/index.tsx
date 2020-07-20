import React from 'react'
import { useParams } from 'react-router-dom'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import { ArticleContent } from '@/components/molecules/article'

export const ArticlePage: React.FC = () => {
  const { articleId } = useParams()
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <ArticleContent id={articleId} />
      </S.Wrapper>
    </DefaultTemplate>
  )
}
