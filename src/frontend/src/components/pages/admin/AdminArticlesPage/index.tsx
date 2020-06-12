import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import AdminCoffeeArticleList from '@/components/organisms/article/AdminCoffeeArticleList'

const Page: React.FC = () => {
  return (
    <AdminTemplate title="記事一覧">
      <S.Wrapper>
        <AdminCoffeeArticleList />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
