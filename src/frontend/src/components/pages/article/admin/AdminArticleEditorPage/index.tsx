import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import AdminArticleEditForm from '@/components/organisms/article/admin/AdminArticleEditForm'

const Page: React.FC = () => {
  return (
    <AdminTemplate title="記事を編集する">
      <S.Wrapper>
        <AdminArticleEditForm />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
