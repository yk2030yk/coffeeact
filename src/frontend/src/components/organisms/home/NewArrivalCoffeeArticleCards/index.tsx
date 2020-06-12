import React from 'react'

import * as S from './index.styled'
import Heading from '@/components/atoms/article/Heading'
import MoreLink from '@/components/molecules/common/MoreLink'
import CoffeeArticleCards from '@/components/molecules/article/CoffeeArticleCards'
import { useNewArrivalCoffeeArticles } from '@/hooks/firestore/useCoffeeArticle'
import BasicBox from '@/components/atoms/common/BasicBox'
const RecommendedCoffeeCards: React.FC = () => {
  const coffeeArticles = useNewArrivalCoffeeArticles()
  return (
    <S.Wrapper>
      <BasicBox>
        <Heading id="recommended.title" />
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
