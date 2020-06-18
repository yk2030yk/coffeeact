import React from 'react'

import * as S from './index.styled'
import HomeTemplate from '@/components/templates/HomeTemplate'
import NewArrivalCoffeeArticleCards from '@/components/organisms/home/NewArrivalCoffeeArticleCards'

const Page: React.FC = () => (
  <HomeTemplate>
    <S.Wrapper>
      <NewArrivalCoffeeArticleCards />
    </S.Wrapper>
  </HomeTemplate>
)

export default Page
