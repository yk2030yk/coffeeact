import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import CoffeeArticleEditor from '@/components/organisms/article/CoffeeArticleEditor'

const Page: React.FC = () => {
  return (
    <AdminTemplate>
      <S.Wrapper>
        <CoffeeArticleEditor />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
