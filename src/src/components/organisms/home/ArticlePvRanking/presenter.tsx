import React from 'react'
import { FaChessKing } from '@/components/atoms/icons'

import * as S from './index.styled'
import { BasicBox } from '@/components/atoms'
import { ArticlePvRankingCards } from '@/components/molecules/article'
import { SideContentTitle } from '@/components/molecules/home/SideContentTitle'
import { Article } from '@/models'

type Props = {
  articles: Article[]
}

export const ArticlePvRankingPresenter: React.FC<Props> = ({ articles }) => (
  <S.Wrapper>
    <BasicBox>
      <SideContentTitle
        IconComponent={<FaChessKing size={20} color={'#e6b422'} />}
        id="home.ranking.title"
      />
    </BasicBox>
    <BasicBox>
      <ArticlePvRankingCards articles={articles} />
    </BasicBox>
  </S.Wrapper>
)
