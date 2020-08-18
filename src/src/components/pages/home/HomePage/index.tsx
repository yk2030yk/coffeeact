import React from 'react'

import * as S from './styled'
import { BasicBox } from '@/components/atoms'
import HomeTemplate from '@/components/templates/HomeTemplate'
import { CurrentArticleListBox } from '@/components/organisms/home/CurrentArticleListBox'
import { ArticlePvRanking } from '@/components/organisms/home/ArticlePvRanking'
import { SearchArticleByTag } from '@/components/organisms/home/SearchArticleByTag'

const Page: React.FC = () => {
  return (
    <HomeTemplate
      mainContent={
        <S.Wrapper>
          <BasicBox>
            <CurrentArticleListBox />
          </BasicBox>
        </S.Wrapper>
      }
      sideContent={
        <S.Wrapper>
          <BasicBox>
            <ArticlePvRanking />
          </BasicBox>
          <BasicBox>
            <SearchArticleByTag />
          </BasicBox>
        </S.Wrapper>
      }
    />
  )
}

export default Page
