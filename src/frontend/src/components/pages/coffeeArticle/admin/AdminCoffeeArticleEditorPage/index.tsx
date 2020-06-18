import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import AdminCoffeeArticleEditor from '@/components/organisms/coffeeArticle/admin/AdminCoffeeArticleEditor'

const Page: React.FC = () => {
  return (
    <AdminTemplate title="記事を編集する">
      <S.Wrapper>
        <AdminCoffeeArticleEditor />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
