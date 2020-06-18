import React, { useState, useEffect } from 'react'

import * as S from './index.styled'
import {
  Heading,
  FormattedMessage,
  BasicBox,
  LoadingBox,
} from '@/components/atoms'
import {
  CoffeeArticleCards,
  CoffeeArticleLIstFilter,
} from '@/components/molecules/coffeeArticle/user'
import NotFoundCoffeeArticles from '@/components/molecules/coffeeArticle/common/NotFoundCoffeeArticle'
import {
  useCoffeeArticles,
  useCoffeeArticlesFilter,
  FilterCondition,
} from '@/hooks/firestore/useCoffeeArticle'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

const Page: React.FC = () => {
  const { coffeeArticles, isLoading, isLoaded } = useCoffeeArticles()
  const filter = useCoffeeArticlesFilter(coffeeArticles)

  const [filterCondition, setFilterCondition] = useState<FilterCondition>({})
  const [filteredCoffeeArticles, setFilteredCoffeeArticles] = useState<
    CoffeeArticle[]
  >([])

  useEffect(() => {
    setFilteredCoffeeArticles(filter(filterCondition))
  }, [setFilteredCoffeeArticles, filter, filterCondition])

  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="articles.title" />
        </Heading>
      </BasicBox>
      <BasicBox>
        <CoffeeArticleLIstFilter setFilterCondition={setFilterCondition} />
      </BasicBox>
      <BasicBox>
        {isLoading && <LoadingBox />}
        {isLoaded && filteredCoffeeArticles.length === 0 && (
          <NotFoundCoffeeArticles />
        )}
        <CoffeeArticleCards coffeeArticles={filteredCoffeeArticles} />
      </BasicBox>
    </S.Wrapper>
  )
}

export default Page
