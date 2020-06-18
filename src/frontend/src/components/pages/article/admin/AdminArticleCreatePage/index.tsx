import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import AdminArticleCreate from '@/components/organisms/article/admin/AdminArticleCreate'

const Page: React.FC = () => {
  return (
    <AdminTemplate title="新規記事を作成する">
      <S.Wrapper>
        <AdminArticleCreate />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
