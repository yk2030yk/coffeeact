import React from 'react'
import { useRecoilValueLoadable } from 'recoil'

import * as S from './index.styled'
import {
  BasicBox,
  Heading,
  FormattedMessage,
  LoadingPlaceholder,
} from '@/components/atoms'
import MoreLink from '@/components/molecules/common/MoreLink'
import { ArticleCards } from '@/components/molecules/article'
import { articlesSelector } from '@/recoil/article/selectors'

const Cards: React.FC = () => {
  const loadable = useRecoilValueLoadable(articlesSelector)

  switch (loadable.state) {
    case 'loading':
      return (
        <>
          <LoadingPlaceholder type="article" />
          <LoadingPlaceholder type="article" />
          <LoadingPlaceholder type="article" />
        </>
      )
    case 'hasValue':
      return (
        <>
          <BasicBox>
            <ArticleCards articles={loadable.contents} />
          </BasicBox>
          <BasicBox>
            <MoreLink text="もっと見る" link="/articles" />
          </BasicBox>
        </>
      )
    default:
      return null
  }
}
const RecommendedCoffeeCards: React.FC = () => {
  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="home.newArrivalArticle.title" />
        </Heading>
      </BasicBox>
      <Cards />
    </S.Wrapper>
  )
}

export default RecommendedCoffeeCards
