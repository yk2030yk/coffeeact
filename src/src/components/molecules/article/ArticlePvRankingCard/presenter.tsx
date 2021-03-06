import React from 'react'

import * as S from './styled'
import { StorageImage } from '@/components/atoms'
import { Article } from '@/models'

type Props = {
  rank: number
  article: Article
}

export const ArticlePvRankingCardPresenter: React.FC<Props> = ({
  rank,
  article,
}) => {
  return (
    <S.Wrapper>
      <S.RankNumberIcon rank={rank}>{rank + '位'}</S.RankNumberIcon>
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
