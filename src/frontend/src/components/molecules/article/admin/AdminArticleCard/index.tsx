import React from 'react'

import * as S from './index.styled'
import { Card, StorageImage } from '@/components/atoms'
import { Article } from '@/models/article/Article'

type Props = {
  article: Article
}

const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <S.Wrapper>
      <Card>
        <S.CoffeeImageWrapper>
          <StorageImage path={article.imgSrc} />
        </S.CoffeeImageWrapper>
        <S.Info>
          <S.CoffeeUpdatedAt>{article.formatUpdatedAt}</S.CoffeeUpdatedAt>
          <S.CoffeeTitle>{article.title}</S.CoffeeTitle>
        </S.Info>
      </Card>
    </S.Wrapper>
  )
}

export default ArticleCard
