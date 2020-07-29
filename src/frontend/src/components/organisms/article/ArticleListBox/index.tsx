import React from 'react'

import * as S from './index.styled'
import { Heading, FormattedMessage, BasicBox } from '@/components/atoms'
import {
  ArticleCardsFilter,
  ArticleCards,
  ArticleCardsLoadingPlaceholder,
} from '@/components/molecules/article'
import { ArticleList } from '../ArticleList'

const condition = {}

export const ArticleListBox: React.FC = () => {
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
