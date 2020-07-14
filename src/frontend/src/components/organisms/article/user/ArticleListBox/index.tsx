import React from 'react'

import * as S from './index.styled'
import { Heading, FormattedMessage, BasicBox } from '@/components/atoms'
import { ArticleListFilter } from '@/components/molecules/article/user'
import ArticleList from '@/components/organisms/article/user/ArticleList'

const Page: React.FC = () => {
  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="articles.title" />
        </Heading>
      </BasicBox>
      <BasicBox>
        <ArticleListFilter />
      </BasicBox>
      <BasicBox>
        <ArticleList />
      </BasicBox>
    </S.Wrapper>
  )
}

export default Page
