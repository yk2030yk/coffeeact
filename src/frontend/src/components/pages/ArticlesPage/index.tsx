import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '../../templates/DefaultTemplate'
import CoffeeArticleList from '@/components/organisms/article/CoffeeArticleList'

const Page: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <CoffeeArticleList />
      </S.Wrapper>
    </DefaultTemplate>
  )
}

export default Page
