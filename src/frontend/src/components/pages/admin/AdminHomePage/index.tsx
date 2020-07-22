import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'
import { AdminDashboard } from '@/components/organisms/dashboard/AdminDashboard'

const Page: React.FC = () => {
  return (
    <AdminTemplate title="ダッシュボード">
      <S.Wrapper>
        <AdminDashboard />
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page
