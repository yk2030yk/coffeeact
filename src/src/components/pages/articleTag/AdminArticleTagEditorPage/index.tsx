import React from 'react'

import * as S from './styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import { AdminArticleTagEditor } from '@/components/organisms/articleTag/AdminArticleTagEditor'

export const AdminArticleTagEditorPage: React.FC = () => {
  return (
    <AdminTemplate title="タグ編集">
      <S.Wrapper>
        <AdminArticleTagEditor />
      </S.Wrapper>
    </AdminTemplate>
  )
}
