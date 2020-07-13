import React from 'react'
import { useRecoilValueLoadable } from 'recoil'

import * as S from './index.styled'
import {
  Heading,
  FormattedMessage,
  BasicBox,
  LoadingPlaceholder,
} from '@/components/atoms'
import {
  ArticleCards,
  ArticleLIstFilter,
} from '@/components/molecules/article/user'
import NotFoundArticle from '@/components/molecules/article/common/NotFoundArticle'
import { filteredArticlesSelector } from '@/recoil/article/selectors'

const Page: React.FC = () => {
  const articlesLoadable = useRecoilValueLoadable(filteredArticlesSelector)
  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="articles.title" />
        </Heading>
      </BasicBox>

      <BasicBox>
        <ArticleLIstFilter />
      </BasicBox>

      <BasicBox>
        {articlesLoadable.state === 'hasValue' && (
          <ArticleCards articles={articlesLoadable.contents} />
        )}
        {articlesLoadable.state === 'hasError' && <p>error</p>}
        {articlesLoadable.state === 'loading' && <LoadingPlaceholder />}
      </BasicBox>
    </S.Wrapper>
  )
}

export default Page
