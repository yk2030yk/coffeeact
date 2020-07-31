import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import { AdminArticleListBox } from '@/components/organisms/article/AdminArticleListBox'

export const AdminArticleListPage: React.FC = () => {
  return (
    <AdminTemplate title="記事一覧">
      <S.Wrapper>
        <AdminArticleListBox />
      </S.Wrapper>
    </AdminTemplate>
  )
}
