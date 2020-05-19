import React from 'react'

import * as S from './OnlineInterviewEntrancePage.styled'
import OnlineInterviewEntrance from '@/components/student/OnlineInterviewEntrance'
import Comp from '@/recoil/interviewInfo/Component'

const OnlineInterviewEntrancePage: React.FC = () => {
  return (
    <S.Wrapper>
      <Comp />
      <OnlineInterviewEntrance />
    </S.Wrapper>
  )
}

export default OnlineInterviewEntrancePage
