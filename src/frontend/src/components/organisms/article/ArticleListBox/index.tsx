import React from 'react'

import * as S from './index.styled'
import { Heading, FormattedMessage, BasicBox } from '@/components/atoms'
import {
  ArticleCardsFilter,
  ArticleCards,
} from '@/components/molecules/article'
import { ArticleList } from '../ArticleList'

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
        <ArticleList ArticleCardsComponent={ArticleCards} />
      </BasicBox>
    </S.Wrapper>
  )
}
