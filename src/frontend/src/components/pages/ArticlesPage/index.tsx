import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '../../templates/DefaultTemplate'
import CoffeeArticleList from '@/components/organisms/article/CoffeeArticleList'
import Pagination from '@/components/molecules/common/Pagination'

const Page: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <CoffeeArticleList />
        <Pagination currentPage={1} maxPage={8} />
      </S.Wrapper>
    </DefaultTemplate>
  )
}

export default Page
