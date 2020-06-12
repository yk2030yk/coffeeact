import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'

const Page: React.FC = () => {
  return (
    <AdminTemplate title="ダッシュボード">
      <S.Wrapper>
        <div>ダッシュボードにはなにもありません</div>
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
