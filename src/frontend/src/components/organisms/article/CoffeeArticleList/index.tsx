import React from 'react'

import * as S from './index.styled'
import Heading from '@/components/atoms/article/Heading'
import CoffeeArticleCards from '@/components/molecules/article/CoffeeArticleCards'
import { useCoffeeArticles } from '@/hooks/firestore/useCoffeeArticle'

const Page: React.FC = () => {
  const coffeeArticles = useCoffeeArticles()

  return (
    <S.Wrapper>
      <Heading id="articles.title" />
      <CoffeeArticleCards coffeeArticles={coffeeArticles} />
    </S.Wrapper>
  )
}

export default Page
