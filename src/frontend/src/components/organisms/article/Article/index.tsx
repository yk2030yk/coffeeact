import React from 'react'

import * as S from './index.styled'
import Card from '@/components/atoms/Card'
import Markdown from '@/components/atoms/article/Markdown'

import { CoffeeArticle } from '@/models/article/CoffeeArticle'

type Props = {
  coffeeArticle: CoffeeArticle
}

const Article: React.FC<Props> = ({ coffeeArticle }) => (
  <S.Wrapper>
    <Card>
      <S.CoffeeImageWrapper>
        <S.CoffeeImage src={coffeeArticle.imgSrc} />
      </S.CoffeeImageWrapper>
      <S.Info>
        <S.CoffeeUpdatedAt>{coffeeArticle.formatUpdatedAt}</S.CoffeeUpdatedAt>
        <S.CoffeeTitle>{coffeeArticle.title}</S.CoffeeTitle>
        <S.CoffeeDescription>
          <Markdown markdown={coffeeArticle.description} />
        </S.CoffeeDescription>
      </S.Info>
    </Card>
  </S.Wrapper>
)

export default Article
