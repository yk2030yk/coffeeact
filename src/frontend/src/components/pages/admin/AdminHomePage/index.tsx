import React from 'react'

import * as S from './index.styled'
import AdminTemplate from '@/components/templates/AdminTemplate'

const Page: React.FC = () => {
  return (
    <AdminTemplate>
      <S.Wrapper>
        <div>admin home</div>
      </S.Wrapper>
    </AdminTemplate>
  )
}

export default Page