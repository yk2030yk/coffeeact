import React from 'react'

import * as S from './index.styled'
import { BasicBox, Markdown, StorageImage } from '@/components/atoms'
import { Article } from '@/models/article/Article'

type Props = {
  article: Article
}

const ArticleContent: React.FC<Props> = ({ article }) => (
  <S.Wrapper>
    <BasicBox>
      <S.CoffeeImageWrapper>
        <StorageImage path={article.imgSrc} />
      </S.CoffeeImageWrapper>
    </BasicBox>
    <BasicBox>
      <S.CoffeeUpdatedAt>{article.formatUpdatedAt}</S.CoffeeUpdatedAt>
    </BasicBox>
    <BasicBox>
      <S.CoffeeTitle>{article.title}</S.CoffeeTitle>
    </BasicBox>
    <BasicBox>
      <S.CoffeeDescription>
        <Markdown markdown={article.description} />
      </S.CoffeeDescription>
    </BasicBox>
  </S.Wrapper>
)

export default ArticleContent
