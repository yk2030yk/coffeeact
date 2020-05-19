import React from 'react'

import * as S from './StudentVideo.styled'
import Participant from '@/components/interview/Participant'
import WaitingStudentMessage from './WaitingStudentMessage'
import DisconnectedStudentMessage from './DisconnectedStudentMessage'
import { useInterviewee } from '@/hooks/useInterviewee'
import { STUDENT_IDENTITY } from '@/constants/room'

const StudentVideo: React.FC = () => {
  const { interviewee, isDisconnected } = useInterviewee(STUDENT_IDENTITY)

  let content
  if (!interviewee) {
    content = <WaitingStudentMessage />
  } else if (isDisconnected) {
    content = <DisconnectedStudentMessage />
  } else {
    content = <Participant participant={interviewee} />
  }

  return <S.Wrapper>{content}</S.Wrapper>
}

export default StudentVideo
