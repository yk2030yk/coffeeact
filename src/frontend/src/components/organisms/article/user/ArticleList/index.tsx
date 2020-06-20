import React, { useState, useEffect } from 'react'

import * as S from './index.styled'
import {
  Heading,
  FormattedMessage,
  BasicBox,
  LoadingPlaceholder,
} from '@/components/atoms'
import {
  ArticleCards,
  ArticleLIstFilter,
} from '@/components/molecules/article/user'
import NotFoundArticle from '@/components/molecules/article/common/NotFoundArticle'
import {
  useArticles,
  useArticlesFilter,
  FilterCondition,
} from '@/hooks/firestore/useArticle'
import { Article } from '@/models/article/Article'

const Page: React.FC = () => {
  const { articles, isLoading, isLoaded } = useArticles()
  const filter = useArticlesFilter(articles)

  const [filterCondition, setFilterCondition] = useState<FilterCondition>({})
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])

  useEffect(() => {
    setFilteredArticles(filter(filterCondition))
  }, [setFilteredArticles, filter, filterCondition])

  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="articles.title" />
        </Heading>
      </BasicBox>
      <BasicBox>
        <ArticleLIstFilter setFilterCondition={setFilterCondition} />
      </BasicBox>
      <BasicBox>
        {isLoading && <LoadingPlaceholder type="article" />}
        {isLoaded && filteredArticles.length === 0 && <NotFoundArticle />}
        <ArticleCards articles={filteredArticles} />
      </BasicBox>
    </S.Wrapper>
  )
}

export default Page
