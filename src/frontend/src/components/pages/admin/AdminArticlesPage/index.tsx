import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import PaginationCoffeeArticleList from '@/components/organisms/article/PaginationCoffeeArticleList'
import Pagination from '@/components/molecules/common/Pagination'

const Page: React.FC = () => {
  return (
    <AdminTemplate>
      <S.Wrapper>
        <PaginationCoffeeArticleList />
        <Pagination currentPage={1} maxPage={8} />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
