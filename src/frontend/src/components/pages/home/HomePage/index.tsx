import React from 'react'

import * as S from './index.styled'
import { BasicBox } from '@/components/atoms'
import HomeTemplate from '@/components/templates/HomeTemplate'
import { CurrentArticleListBox } from '@/components/organisms/article/CurrentArticleListBox'
import { ArticlePvRanking } from '@/components/organisms/article/ArticlePvRanking'
import { SearchArticleByTag } from '@/components/organisms/articleTag/SearchArticleByTag'

const Page: React.FC = () => {
  return (
    <HomeTemplate>
      <S.Wrapper>
        <BasicBox>
          <CurrentArticleListBox />
        </BasicBox>
        <BasicBox>
          <ArticlePvRanking />
        </BasicBox>
        <BasicBox>
          <SearchArticleByTag />
        </BasicBox>
      </S.Wrapper>
    </HomeTemplate>
  )
}

export default Page
