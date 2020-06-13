import React, { useState } from 'react'

import * as S from './index.styled'
import { Heading, BasicBox, Input } from '@/components/atoms/common'
import CoffeeArticleCards from '@/components/molecules/article/CoffeeArticleCards'
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
      <BasicBox>
        <Heading id="articles.title" />
      </BasicBox>
      <BasicBox>
        <Input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          width="300px"
        />
      </BasicBox>
      <BasicBox>
        <CoffeeArticleCards coffeeArticles={filtered} />
      </BasicBox>
    </S.Wrapper>
  )
}

export default Page
