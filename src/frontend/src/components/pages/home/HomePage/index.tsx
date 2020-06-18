import React from 'react'

import * as S from './index.styled'
import HomeTemplate from '@/components/templates/HomeTemplate'
import NewArrivalCoffeeArticleCards from '@/components/organisms/home/NewArrivalCoffeeArticleCards'
import NewArrivalArticleCards from '@/components/organisms/home/NewArrivalArticleCards'

const Page: React.FC = () => (
  <HomeTemplate>
    <S.Wrapper>
      <NewArrivalCoffeeArticleCards />
      <NewArrivalArticleCards />
    </S.Wrapper>
  </HomeTemplate>
)

export default Page
