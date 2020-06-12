import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import CoffeeArticleList from '@/components/organisms/article/CoffeeArticleList'

const Page: React.FC = () => {
  return (
    <AdminTemplate>
      <S.Wrapper>
        <CoffeeArticleList />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
