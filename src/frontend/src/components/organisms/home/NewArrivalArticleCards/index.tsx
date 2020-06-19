import React from 'react'

import * as S from './index.styled'
import {
  BasicBox,
  Heading,
  FormattedMessage,
  LoadingPlaceholder,
} from '@/components/atoms'
import MoreLink from '@/components/molecules/common/MoreLink'
import { ArticleCards } from '@/components/molecules/article/user'
import { useNewArrivalArticles } from '@/hooks/firestore/useArticle'

const RecommendedCoffeeCards: React.FC = () => {
  const { articles, isLoading } = useNewArrivalArticles()
  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="home.newArrivalArticle.title" />
        </Heading>
      </BasicBox>
      {isLoading ? (
        <>
          <LoadingPlaceholder type="article" />
          <LoadingPlaceholder type="article" />
          <LoadingPlaceholder type="article" />
        </>
      ) : (
        <>
          <BasicBox>
            <ArticleCards articles={articles} />
          </BasicBox>
          <BasicBox>
            <MoreLink text="もっと見る" link="/articles" />
          </BasicBox>
        </>
      )}
    </S.Wrapper>
  )
}

export default RecommendedCoffeeCards
