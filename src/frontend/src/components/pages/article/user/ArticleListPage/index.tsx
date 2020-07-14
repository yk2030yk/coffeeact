import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import ArticleListBox from '@/components/organisms/article/user/ArticleListBox'

const Page: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <ArticleListBox />
      </S.Wrapper>
    </DefaultTemplate>
  )
}

export default Page
