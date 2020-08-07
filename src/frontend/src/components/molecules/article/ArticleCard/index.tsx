import React from 'react'

import * as S from './index.styled'
import { Card, StorageImage } from '@/components/atoms'
import { Article } from '@/models/Article'

type Props = {
  article: Article
}

export const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <S.Wrapper>
      <Card>
        <S.CoffeeImageWrapper>
          <StorageImage path={article.imgSrc} />
          {article.isNewArrival && <S.NewArrivalIcon>new</S.NewArrivalIcon>}
        </S.CoffeeImageWrapper>
        <S.Info>
          <S.CoffeeUpdatedAt>{article.formatUpdatedAt}</S.CoffeeUpdatedAt>
          <S.CoffeeTitle>{article.title}</S.CoffeeTitle>
        </S.Info>
      </Card>
    </S.Wrapper>
  )
}
