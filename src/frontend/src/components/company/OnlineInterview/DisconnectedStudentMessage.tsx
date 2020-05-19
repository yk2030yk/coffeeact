import React from 'react'

import * as S from './DisconnectedStudentMessage.styled'

const WaitingStudent: React.FC = () => {
  return (
    <S.Wrapper>
      <p>接続が切れました。</p>
    </S.Wrapper>
  )
}

export default WaitingStudent
