import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'

const Page: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <div>admin home</div>
      </S.Wrapper>
    </DefaultTemplate>
  )
}

export default Page
