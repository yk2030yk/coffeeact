import React from 'react'

import * as S from './index.styled'
import { BasicBox, Markdown, StorageImage } from '@/components/atoms'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

type Props = {
  coffeeArticle: CoffeeArticle
}

const Article: React.FC<Props> = ({ coffeeArticle }) => (
  <S.Wrapper>
    <BasicBox>
      <S.CoffeeImageWrapper>
        <StorageImage path={coffeeArticle.imgSrc} />
      </S.CoffeeImageWrapper>
    </BasicBox>
    <BasicBox>
      <S.CoffeeUpdatedAt>{coffeeArticle.formatUpdatedAt}</S.CoffeeUpdatedAt>
    </BasicBox>
    <BasicBox>
      <S.CoffeeTitle>{coffeeArticle.title}</S.CoffeeTitle>
    </BasicBox>
    <BasicBox>
      <S.CoffeeDescription>
        <Markdown markdown={coffeeArticle.description} />
      </S.CoffeeDescription>
    </BasicBox>
  </S.Wrapper>
)

export default Article
