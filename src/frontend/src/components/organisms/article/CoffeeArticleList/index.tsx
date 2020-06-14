import React, { useState } from 'react'

import * as S from './index.styled'
import { Heading, FormattedMessage, BasicBox } from '@/components/atoms'
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
    tags: searchText,
  })

  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="articles.title" />
        </Heading>
      </BasicBox>
      <BasicBox>
        <S.InputText
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="記事を絞り込む"
        />
      </BasicBox>
      <BasicBox>
        <CoffeeArticleCards coffeeArticles={filtered} />
      </BasicBox>
    </S.Wrapper>
  )
}

export default Page
