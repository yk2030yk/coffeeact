import React from 'react'

import * as S from './index.styled'
import {
  BasicBox,
  Heading,
  FormattedMessage,
  LoadingPlaceholder,
} from '@/components/atoms'
import MoreLink from '@/components/molecules/common/MoreLink'
import { CoffeeArticleCards } from '@/components/molecules/coffeeArticle/user'
import { useNewArrivalCoffeeArticles } from '@/hooks/firestore/useCoffeeArticle'

const RecommendedCoffeeCards: React.FC = () => {
  const { coffeeArticles, isLoading } = useNewArrivalCoffeeArticles()
  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="home.newArrivalCoffeeArticle.title" />
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
            <CoffeeArticleCards coffeeArticles={coffeeArticles} />
          </BasicBox>
          <BasicBox>
            <MoreLink text="もっと見る" link="/coffee/articles" />
          </BasicBox>
        </>
      )}
    </S.Wrapper>
  )
}

export default RecommendedCoffeeCards
