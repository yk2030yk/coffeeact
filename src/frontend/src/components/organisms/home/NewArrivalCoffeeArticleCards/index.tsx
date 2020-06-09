import React from 'react'

import * as S from './index.styled'
import Heading from '@/components/atoms/article/Heading'
import MoreLink from '@/components/molecules/common/MoreLink'
import CoffeeArticleCards from '@/components/molecules/article/CoffeeArticleCards'
import { useNewArrivalCoffeeArticles } from '@/hooks/firestore/useCoffeeArticle'

const RecommendedCoffeeCards: React.FC = () => {
  const coffeeArticles = useNewArrivalCoffeeArticles()
  return (
    <S.Wrapper>
      <Heading id="recommended.title" />
      <CoffeeArticleCards coffeeArticles={coffeeArticles} />
      <MoreLink text="もっと見る" link="/articles" />
    </S.Wrapper>
  )
}

export default RecommendedCoffeeCards
