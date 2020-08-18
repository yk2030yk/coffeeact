import React from 'react'

import * as S from './index.styled'
import ErrorTemplate from '@/components/templates/ErrorTemplate'
import { NotFoundMessage } from '@/components/organisms/error/NotFoundMessage'

const Page: React.FC = () => (
  <ErrorTemplate>
    <S.Content>
      <NotFoundMessage />
    </S.Content>
  </ErrorTemplate>
)

export default Page
