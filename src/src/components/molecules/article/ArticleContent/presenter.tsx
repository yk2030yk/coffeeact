import React from 'react'

import * as S from './styled'
import { BasicBox, StorageImage } from '@/components/atoms'
import { ArticleTags } from '../ArticleTags'
import { Article } from '@/models'

type Props = {
  article: Article
}

export const ArticleContentPresenter: React.FC<Props> = ({ article }) => {
  return (
    <S.Wrapper>
      <BasicBox>
        <S.CoffeeUpdatedAt>{article.formatUpdatedAt}</S.CoffeeUpdatedAt>
      </BasicBox>
      <BasicBox>
        <S.HeadingWrapper>
          <S.TitleWrapper>
            <StorageImage path={article.imgSrc} />
            <S.CoffeeTitle>{article.title}</S.CoffeeTitle>
          </S.TitleWrapper>
        </S.HeadingWrapper>
      </BasicBox>
      <BasicBox>
        <ArticleTags tags={article.tags} />
      </BasicBox>
      <BasicBox>
        <S.CoffeeDescription>
          <div dangerouslySetInnerHTML={{ __html: article.description }} />
        </S.CoffeeDescription>
      </BasicBox>
    </S.Wrapper>
  )
}
