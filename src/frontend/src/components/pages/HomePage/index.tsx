import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '../../templates/DefaultTemplate'
import RecommendedCoffeeCards from '@/components/organisms/home/RecommendedCoffeeCards'

const Page: React.FC = () => (
  <DefaultTemplate>
    <S.Wrapper>
      <RecommendedCoffeeCards />
    </S.Wrapper>
  </DefaultTemplate>
)

export default Page
