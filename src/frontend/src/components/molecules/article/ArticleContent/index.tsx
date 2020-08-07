import React from 'react'
import { useRecoilValue } from 'recoil'

import * as S from './index.styled'
import { BasicBox, StorageImage } from '@/components/atoms'
import { articleState } from '@/recoil/article'
import { loadableSelector } from '@/recoil/loadable'
import { ArticleTags } from '../ArticleTags'

export const ArticleContent: React.FC = () => {
  const article = useRecoilValue(articleState)
  const loadable = useRecoilValue(loadableSelector('article'))

  if (!loadable.isLoaded) return <div>loading...</div>

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
