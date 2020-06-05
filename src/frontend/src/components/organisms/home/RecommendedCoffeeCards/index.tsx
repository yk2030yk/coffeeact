import React from 'react'

import * as S from './index.styled'
import Heading from '@/components/atoms/article/Heading'
import RecommendedCoffeeCard from '@/components/molecules/home/RecommendedCoffeeCard'
import { recommendedCoffeeApi } from '@/service/api/RecommendedCoffeeApi'

const RecommendedCoffeeCards: React.FC = () => {
  const recommendedCoffees = recommendedCoffeeApi.getList()

  return (
    <S.Wrapper>
      <Heading id="recommended.title" />
      <S.Cards>
        {recommendedCoffees.map((recommendedCoffee) => (
          <RecommendedCoffeeCard
            key={recommendedCoffee.updatedAt}
            recommendedCoffee={recommendedCoffee}
          />
        ))}
      </S.Cards>
    </S.Wrapper>
  )
}

export default RecommendedCoffeeCards
