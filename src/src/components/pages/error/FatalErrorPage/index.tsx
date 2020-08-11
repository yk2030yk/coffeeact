import React from 'react'

import * as S from './index.styled'
import ErrorTemplate from '@/components/templates/ErrorTemplate'
import FatalErrorMessage from '@/components/organisms/error/FatalErrorMessage'

const Page: React.FC = () => (
  <ErrorTemplate>
    <S.Content>
      <FatalErrorMessage />
    </S.Content>
  </ErrorTemplate>
)

export default Page
