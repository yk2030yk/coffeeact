import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import AdminCoffeeArticleCreate from '@/components/organisms/coffeeArticle/admin/AdminCoffeeArticleCreate'

const Page: React.FC = () => {
  return (
    <AdminTemplate title="新規記事を作成する">
      <S.Wrapper>
        <AdminCoffeeArticleCreate />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
