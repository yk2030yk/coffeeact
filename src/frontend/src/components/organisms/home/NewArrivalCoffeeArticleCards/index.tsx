import React from 'react'

import * as S from './index.styled'
import { BasicBox, Heading, FormattedMessage } from '@/components/atoms'
import MoreLink from '@/components/molecules/common/MoreLink'
import CoffeeArticleCards from '@/components/molecules/article/CoffeeArticleCards'
import { useNewArrivalCoffeeArticles } from '@/hooks/firestore/useCoffeeArticle'

const RecommendedCoffeeCards: React.FC = () => {
  const coffeeArticles = useNewArrivalCoffeeArticles()
  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="recommended.title" />
        </Heading>
      </BasicBox>
      <BasicBox>
        <CoffeeArticleCards coffeeArticles={coffeeArticles} />
      </BasicBox>
      <BasicBox>
        <MoreLink text="もっと見る" link="/articles" />
      </BasicBox>
    </S.Wrapper>
  )
}

export default RecommendedCoffeeCards
