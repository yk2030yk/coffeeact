import React from 'react'

import * as S from './WaitingStudentMessage.styled'
import LoadingMessage from '@/components/common/LoadingMessage'

const WaitingStudent: React.FC = () => {
  return (
    <S.Wrapper>
      <p>
        学生がお越しになるまで少々お待ちください
        <LoadingMessage />
      </p>
    </S.Wrapper>
  )
}

export default WaitingStudent
