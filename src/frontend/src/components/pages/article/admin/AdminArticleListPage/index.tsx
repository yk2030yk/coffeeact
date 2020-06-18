import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import AdminArticleList from '@/components/organisms/article/admin/AdminArticleList'

const Page: React.FC = () => {
  return (
    <AdminTemplate title="記事一覧">
      <S.Wrapper>
        <AdminArticleList />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
