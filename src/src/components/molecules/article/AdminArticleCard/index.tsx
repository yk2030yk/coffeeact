import React from 'react'

import * as S from './styled'
import { StorageImage } from '@/components/atoms'
import { ArticleTags } from '@/components/molecules/article/ArticleTags'
import { Article } from '@/models'

type Props = {
  article: Article
}

export const AdminArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <S.Wrapper isPublish={article.isPublish}>
      <S.CoffeeImageWrapper>
        <StorageImage path={article.imgSrc} />
        <S.PublishIcon isPublish={article.isPublish}>
          {article.isPublish ? '公開中' : '非公開'}
        </S.PublishIcon>
      </S.CoffeeImageWrapper>
      <S.Info>
        <S.CoffeeUpdatedAt>{article.formatUpdatedAt}</S.CoffeeUpdatedAt>
        <S.CoffeeTitle>{article.title}</S.CoffeeTitle>
        <S.CoffeeTags>
          <ArticleTags tags={article.tags} />
        </S.CoffeeTags>
      </S.Info>
    </S.Wrapper>
  )
}
