import React from 'react'

import * as S from './index.styled'
import Heading from '@/components/atoms/article/Heading'
import CoffeeArticleCards from '@/components/molecules/article/CoffeeArticleCards'
import { usePaginationCoffeeArticles } from '@/hooks/firestore/useCoffeeArticle'
import { useQuery } from '@/hooks/common/useQuery'

const Page: React.FC = () => {
  const query = useQuery()

  const page = Number(query.get('page')) || 1
  const coffeeArticles = usePaginationCoffeeArticles(page, 10)

  return (
    <S.Wrapper>
      <Heading id="articles.title" />
      <CoffeeArticleCards coffeeArticles={coffeeArticles} />
    </S.Wrapper>
  )
}

export default Page
