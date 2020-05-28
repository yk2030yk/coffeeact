import React from 'react'

import * as S from './index.styled'
import Card from '@/components/atoms/Card'

import { RecommendedCoffee } from '@/models/coffee'

type Props = {
  recommendedCoffee: RecommendedCoffee
}

const RecommendedCoffeeCard: React.FC<Props> = ({ recommendedCoffee }) => (
  <S.Wrapper>
    <Card>
      <S.CoffeeImageWrapper>
        <S.CoffeeImage src={recommendedCoffee.imgSrc} />
      </S.CoffeeImageWrapper>
      <S.Info>
        <S.CoffeeUpdatedAt>
          {recommendedCoffee.formatUpdatedAt}
        </S.CoffeeUpdatedAt>
        <S.CoffeeTitle>{recommendedCoffee.title}</S.CoffeeTitle>
        <S.CoffeeDescription>
          {recommendedCoffee.description}
        </S.CoffeeDescription>
      </S.Info>
    </Card>
  </S.Wrapper>
)

export default RecommendedCoffeeCard
