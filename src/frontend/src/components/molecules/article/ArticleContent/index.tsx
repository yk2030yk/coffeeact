import React from 'react'
import { useRecoilValueLoadable } from 'recoil'

import * as S from './index.styled'
import { BasicBox, Tag, StorageImage } from '@/components/atoms'
import { articleSelector } from '@/recoil/article/selectors'
import { ArticleTags } from '../ArticleTags'

type Props = {
  id: string
}

export const ArticleContent: React.FC<Props> = ({ id }) => {
  const loadable = useRecoilValueLoadable(articleSelector(id))

  if (loadable.state !== 'hasValue') return null

  const article = loadable.contents
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
