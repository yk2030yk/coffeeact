import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '../../templates/DefaultTemplate'
import CoffeeArticleEditor from '@/components/organisms/article/CoffeeArticleEditor'

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
