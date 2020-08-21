import React from 'react'

import * as S from './styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import { LoginForm } from '@/components/organisms/admin/LoginForm'

const Page: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <LoginForm />
      </S.Wrapper>
    </DefaultTemplate>
  )
}

export default Page
