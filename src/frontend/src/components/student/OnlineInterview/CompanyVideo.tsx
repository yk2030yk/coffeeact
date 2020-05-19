import React from 'react'

import * as S from './CompanyVideo.styled'
import Participant from '@/components/interview/Participant'
import WaitingCompanyMessage from './WaitingCompanyMessage'
import DisconnectedCompanyMessage from './DisconnectedCompanyMessage'
import { useInterviewee } from '@/hooks/useInterviewee'
import { COMPANY_IDENTITY } from '@/constants/room'

const CompanyVideo: React.FC = () => {
  const { interviewee, isDisconnected } = useInterviewee(COMPANY_IDENTITY)

  let content
  if (!interviewee) {
    content = <WaitingCompanyMessage />
  } else if (isDisconnected) {
    content = <DisconnectedCompanyMessage />
  } else {
    content = <Participant participant={interviewee} />
  }

  return <S.Wrapper>{content}</S.Wrapper>
}

export default CompanyVideo
