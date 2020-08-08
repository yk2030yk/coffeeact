import React from 'react'

import * as S from './index.styled'
import { Heading, FormattedMessage, BasicBox } from '@/components/atoms'
import {
  ArticleCardsFilter,
  AdminArticleCards,
  AdminArticleCardsLoadingPlaceholder,
} from '@/components/molecules/article'
import { ArticleList } from '../ArticleList'

export const AdminArticleListBox: React.FC = () => {
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
          ArticleCardsComponent={AdminArticleCards}
          LoadingPlaceholderComponent={AdminArticleCardsLoadingPlaceholder}
        />
      </BasicBox>
    </S.Wrapper>
  )
}
