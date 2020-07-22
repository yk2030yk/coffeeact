import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import { AdminArticleListBox } from '@/components/organisms/article/AdminArticleListBox'
import { useArticles } from '@/recoil/article/hooks'

export const AdminArticleListPage: React.FC = () => {
  useArticles()
  return (
    <AdminTemplate title="記事一覧">
      <S.Wrapper>
        <AdminArticleListBox />
      </S.Wrapper>
    </AdminTemplate>
  )
}
