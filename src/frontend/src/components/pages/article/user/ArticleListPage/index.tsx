import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import ArticleList from '@/components/organisms/article/user/ArticleList'

const Page: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <ArticleList />
      </S.Wrapper>
    </DefaultTemplate>
  )
}

export default Page
