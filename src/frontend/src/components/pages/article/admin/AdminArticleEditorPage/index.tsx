import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import AdminArticleEditor from '@/components/organisms/article/admin/AdminArticleEditor'

const Page: React.FC = () => {
  return (
    <AdminTemplate title="記事を編集する">
      <S.Wrapper>
        <AdminArticleEditor />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
