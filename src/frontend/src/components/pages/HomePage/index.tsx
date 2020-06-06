import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '../../templates/DefaultTemplate'
import RecommendedCoffeeArticleCards from '@/components/organisms/home/RecommendedCoffeeArticleCards'

const Page: React.FC = () => (
  <DefaultTemplate>
    <S.Wrapper>
      <RecommendedCoffeeArticleCards />
    </S.Wrapper>
  </DefaultTemplate>
)

export default Page
