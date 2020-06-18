import React from 'react'

import * as S from './index.styled'
import { Card, StorageImage } from '@/components/atoms'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

type Props = {
  coffeeArticle: CoffeeArticle
}

const CoffeeArticleCard: React.FC<Props> = ({ coffeeArticle }) => {
  return (
    <S.Wrapper>
      <Card>
        <S.CoffeeImageWrapper>
          <StorageImage path={coffeeArticle.imgSrc} />
        </S.CoffeeImageWrapper>
        <S.Info>
          <S.CoffeeUpdatedAt>{coffeeArticle.formatUpdatedAt}</S.CoffeeUpdatedAt>
          <S.CoffeeTitle>{coffeeArticle.title}</S.CoffeeTitle>
        </S.Info>
      </Card>
    </S.Wrapper>
  )
}

export default CoffeeArticleCard
