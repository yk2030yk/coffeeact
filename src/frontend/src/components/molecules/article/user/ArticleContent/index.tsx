import React from 'react'
import { useRecoilValueLoadable } from 'recoil'

import * as S from './index.styled'
import { BasicBox, Markdown, StorageImage } from '@/components/atoms'
import { articleSelector } from '@/recoil/article/selectors'

type Props = {
  id: string
}

const ArticleContent: React.FC<Props> = ({ id }) => {
  const loadable = useRecoilValueLoadable(articleSelector(id))

  if (loadable.state !== 'hasValue') return null

  const article = loadable.contents
  return (
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
}

export default ArticleContent
