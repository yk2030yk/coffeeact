import React from 'react'

import * as S from './index.styled'
import { Heading, FormattedMessage, BasicBox } from '@/components/atoms'
import MoreLink from '@/components/molecules/common/MoreLink'
import {
  ArticleCardsFilter,
  ArticleCards,
} from '@/components/molecules/article'
import { ArticleList } from '../ArticleList'

export const CurrentArticleListBox: React.FC = () => {
  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="home.newArrivalArticle.title" />
        </Heading>
      </BasicBox>
      <BasicBox>
        <ArticleCardsFilter />
      </BasicBox>
      <BasicBox>
        <ArticleList ArticleCardsComponent={ArticleCards} />
      </BasicBox>
      <BasicBox>
        <MoreLink text="もっと見る" link="/articles" />
      </BasicBox>
    </S.Wrapper>
  )
}
