import React from 'react'

import * as S from './OnlineInterviewPage.styled'
import { InterviewContextProvider } from '@/contexts/InterviewContext'
import OnlineInterview from '@/components/student/OnlineInterview'
import { STUDENT_IDENTITY } from '@/constants/room'

const OnlineInterviewPage: React.FC = () => {
  return (
    <S.Wrapper>
      <InterviewContextProvider identity={STUDENT_IDENTITY}>
        <OnlineInterview />
      </InterviewContextProvider>
    </S.Wrapper>
  )
}

export default OnlineInterviewPage
