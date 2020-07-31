import React, { useState } from 'react'

import * as S from './index.styled'
import { Heading, FormattedMessage, BasicBox } from '@/components/atoms'
import {
  ArticleCardsFilter,
  ArticleCards,
  ArticleCardsLoadingPlaceholder,
} from '@/components/molecules/article'
import { ArticleList } from '../ArticleList'
import { GetListCondition } from '@/service/firestore/ArticleService'
import { useQuery } from '@/hooks/common/useQuery'

export const SearchResultArticleListBox: React.FC = () => {
  const query = useQuery()
  const tag = query.get('tag') || ''
  const [condition] = useState<GetListCondition>({ tag })

  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="articles.title" />
        </Heading>
      </BasicBox>
      <BasicBox>
        <ArticleCardsFilter />
      </BasicBox>
      <BasicBox>
        <ArticleList
          ArticleCardsComponent={ArticleCards}
          LoadingPlaceholderComponent={ArticleCardsLoadingPlaceholder}
          condition={condition}
        />
      </BasicBox>
    </S.Wrapper>
  )
}
