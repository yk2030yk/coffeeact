import React, { useState } from 'react'

import * as S from './index.styled'
import Heading from '@/components/atoms/article/Heading'
import AdminCoffeeArticleCards from '@/components/molecules/article/AdminCoffeeArticleCards'
import {
  useCoffeeArticles,
  useCoffeeArticlesFilter,
} from '@/hooks/firestore/useCoffeeArticle'

const Page: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('')
  const { coffeeArticles } = useCoffeeArticles()
  const filter = useCoffeeArticlesFilter(coffeeArticles)

  const filtered = filter({
    title: searchText,
    description: searchText,
    limit: 5,
  })

  return (
    <S.Wrapper>
      <Heading id="articles.title" />
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <AdminCoffeeArticleCards coffeeArticles={filtered} />
    </S.Wrapper>
  )
}

export default Page
