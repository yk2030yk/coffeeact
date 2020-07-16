import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import { ArticleEditForm } from '@/components/organisms/articleForm/ArticleEditForm'

const Page: React.FC = () => {
  return (
    <AdminTemplate title="記事を編集する">
      <S.Wrapper>
        <ArticleEditForm />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
