import React from 'react'

import * as S from './index.styled'
import { StorageImage } from '@/components/atoms'
import { Article } from '@/models/article/Article'

type Props = {
  rank: number
  article: Article
}

export const ArticlePvRankingCard: React.FC<Props> = ({ rank, article }) => {
  return (
    <S.Wrapper>
      <S.GridItem>
        <S.RankNumber>{rank + '位'}</S.RankNumber>
      </S.GridItem>
      <S.CoffeeImageWrapper>
        <StorageImage path={article.imgSrc} />
      </S.CoffeeImageWrapper>
      <S.GridItem>
        <S.Info>
          <S.CoffeeTitle>{article.title}</S.CoffeeTitle>
        </S.Info>
      </S.GridItem>
    </S.Wrapper>
  )
}
