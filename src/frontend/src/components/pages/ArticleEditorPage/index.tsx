import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '../../templates/DefaultTemplate'
import CoffeeArticleEditor from '@/components/molecules/article/CoffeeArticleEditor'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

const Page: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <CoffeeArticleEditor />
      </S.Wrapper>
    </DefaultTemplate>
  )
}

export default Page
