import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import CoffeeArticleList from '@/components/organisms/coffeeArticle/user/CoffeeArticleList'

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
