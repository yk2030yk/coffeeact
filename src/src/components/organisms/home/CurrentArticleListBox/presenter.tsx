import React from 'react'

import * as S from './index.styled'
import { RiArticleLine } from '@/components/atoms/icons'
import { BasicBox } from '@/components/atoms'
import MoreLink from '@/components/molecules/common/MoreLink'
import {
  CurrentArticleCards,
  CurrentArticleCardsLoadingPlaceholder,
} from '@/components/molecules/article'
import { MainContentTitle } from '@/components/molecules/home/MainContentTitle'
import { ArticleList } from '@/components/organisms/article/ArticleList'

export const CurrentArticleListBoxPresenter: React.FC = () => {
  return (
    <S.Wrapper>
      <BasicBox>
        <MainContentTitle
          IconComponent={<RiArticleLine size={30} />}
          id="home.newArrivalArticle.title"
        />
      </BasicBox>
      <BasicBox>
        <ArticleList
          ArticleCardsComponent={CurrentArticleCards}
          LoadingPlaceholderComponent={CurrentArticleCardsLoadingPlaceholder}
          isShowPager={false}
        />
      </BasicBox>
      <BasicBox>
        <MoreLink text="もっと見る" link="/articles" />
      </BasicBox>
    </S.Wrapper>
  )
}
