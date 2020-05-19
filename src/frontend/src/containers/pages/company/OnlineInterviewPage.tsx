import React from 'react'

import * as S from './OnlineInterviewPage.styled'
import { InterviewContextProvider } from '@/contexts/InterviewContext'
import OnlineInterview from '@/components/company/OnlineInterview'
import { COMPANY_IDENTITY } from '@/constants/room'

const OnlineInterviewPage: React.FC = () => {
  return (
    <S.Wrapper>
      <InterviewContextProvider identity={COMPANY_IDENTITY}>
        <OnlineInterview />
      </InterviewContextProvider>
    </S.Wrapper>
  )
}

export default OnlineInterviewPage
