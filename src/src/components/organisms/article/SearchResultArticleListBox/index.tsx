import React from 'react'

import * as S from './index.styled'
import { Heading, FormattedMessage, BasicBox } from '@/components/atoms'
import {
  ArticleCards,
  ArticleCardsLoadingPlaceholder,
} from '@/components/molecules/article'
import { ArticleList } from '../ArticleList'

export const SearchResultArticleListBox: React.FC = () => {
  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="articles.title" />
        </Heading>
      </BasicBox>
      <BasicBox>
        <ArticleList
          ArticleCardsComponent={ArticleCards}
          LoadingPlaceholderComponent={ArticleCardsLoadingPlaceholder}
        />
      </BasicBox>
    </S.Wrapper>
  )
}
