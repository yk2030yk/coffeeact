import React from 'react'

import * as S from './index.styled'
import Heading from '@/components/atoms/article/Heading'
import CoffeeArticleCard from '@/components/molecules/article/CoffeeArticleCard'
import { useCoffeeArticles } from '@/hooks/firestore/useCoffeeArticle'

const RecommendedCoffeeCards: React.FC = () => {
  const coffeeArticles = useCoffeeArticles()
  return (
    <S.Wrapper>
      <Heading id="recommended.title" />
      <S.Cards>
        {coffeeArticles.map((coffeeArticle) => (
          <S.Link key={coffeeArticle.id} to={`/article/${coffeeArticle.id}`}>
            <CoffeeArticleCard coffeeArticle={coffeeArticle} />
          </S.Link>
        ))}
      </S.Cards>
    </S.Wrapper>
  )
}

export default RecommendedCoffeeCards
