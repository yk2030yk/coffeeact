import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import { ArticleCreateForm } from '@/components/organisms/articleForm/ArticleCreateForm'

export const AdminArticleCreatePage: React.FC = () => {
  return (
    <AdminTemplate title="新規記事を作成する">
      <S.Wrapper>
        <ArticleCreateForm />
      </S.Wrapper>
    </AdminTemplate>
  )
}
