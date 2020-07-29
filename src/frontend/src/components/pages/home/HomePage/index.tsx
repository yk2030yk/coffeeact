import React from 'react'

import * as S from './index.styled'
import { Heading, FormattedMessage, BasicBox } from '@/components/atoms'
import HomeTemplate from '@/components/templates/HomeTemplate'
import { CurrentArticleListBox } from '@/components/organisms/article/CurrentArticleListBox'
import { ArticlePvRanking } from '@/components/organisms/article/ArticlePvRanking'
import { useArticles } from '@/recoil/article/hooks'

const cond = { limit: 6 }
const Page: React.FC = () => {
  useArticles(cond)
  return (
    <HomeTemplate>
      <S.Wrapper>
        <BasicBox>
          <CurrentArticleListBox />
        </BasicBox>
        <BasicBox>
          <ArticlePvRanking />
        </BasicBox>
      </S.Wrapper>
    </HomeTemplate>
  )
}

export default Page
