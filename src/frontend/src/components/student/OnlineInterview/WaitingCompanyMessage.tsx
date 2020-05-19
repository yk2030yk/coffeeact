import React from 'react'

import * as S from './WaitingCompanyMessage.styled'
import LoadingMessage from '@/components/common/LoadingMessage'

const WaitingCompany: React.FC = () => {
  return (
    <S.Wrapper>
      <p>
        企業様がお越しになるまで少々お待ちください
        <LoadingMessage />
      </p>
    </S.Wrapper>
  )
}

export default WaitingCompany
