import React from 'react'
import { RiArticleLine } from '@/components/atoms/icons'

import * as S from './index.styled'
import { TitleWithIcon, BasicBox } from '@/components/atoms'
import MoreLink from '@/components/molecules/common/MoreLink'
import {
  ArticleCards,
  ArticleCardsLoadingPlaceholder,
} from '@/components/molecules/article'
import { ArticleList } from '../ArticleList'

const condition = { limit: 6 }

export const CurrentArticleListBox: React.FC = () => {
  return (
    <S.Wrapper>
      <BasicBox>
        <TitleWithIcon
          IconComponent={<RiArticleLine size={25} color={'#6b1224'} />}
          id="home.newArrivalArticle.title"
        />
      </BasicBox>
      <BasicBox>
        <ArticleList
          ArticleCardsComponent={ArticleCards}
          LoadingPlaceholderComponent={ArticleCardsLoadingPlaceholder}
          condition={condition}
        />
      </BasicBox>
      <BasicBox>
        <MoreLink text="もっと見る" link="/articles" />
      </BasicBox>
    </S.Wrapper>
  )
}
