import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import CoffeeArticleCreate from '@/components/organisms/article/CoffeeArticleCreate'

const Page: React.FC = () => {
  return (
    <AdminTemplate title="新規記事を作成する">
      <S.Wrapper>
        <CoffeeArticleCreate />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
