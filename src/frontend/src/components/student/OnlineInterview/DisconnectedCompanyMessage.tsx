import React from 'react'

import * as S from './DisconnectedCompanyMessage.styled'

const WaitingCompany: React.FC = () => {
  return (
    <S.Wrapper>
      <p>接続が切れました。</p>
    </S.Wrapper>
  )
}

export default WaitingCompany
