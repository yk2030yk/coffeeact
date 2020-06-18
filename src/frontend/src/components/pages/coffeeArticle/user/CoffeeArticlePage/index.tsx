import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import CoffeeArticle from '@/components/organisms/coffeeArticle/user/CoffeeArticle'

const Page: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <CoffeeArticle />
      </S.Wrapper>
    </DefaultTemplate>
  )
}

export default Page
