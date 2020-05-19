import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { useInterviewContext } from '@/contexts/InterviewContext'
import * as S from './index.styled'
import Connecting from './Connecting'
import StopButton from './StopButton'
import StudentInfo from './StudentInfo'
import VideoContent from './VideoContent'
import ConnectErrorModal from './ConnectErrorModal'
import Memo from './Memo'

const OnlineInterview: React.FC = () => {
  const history = useHistory()
  const {
    roomName,
    isConnecting,
    isDisconnected,
    connectError,
    tokenError,
  } = useInterviewContext()

  useEffect(() => {
    if (!isDisconnected) return
    history.push(`/company/${roomName}/complete`)
  }, [isDisconnected, roomName, history])

  if (isConnecting) {
    return <Connecting />
    //} else if (tokenError || connectError) {
  } else if (connectError) {
    return <ConnectErrorModal />
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.HeaderContent>
          <StopButton />
        </S.HeaderContent>
        <S.VideoContent>
          <VideoContent />
        </S.VideoContent>
        <S.MemoContent>
          <Memo />
        </S.MemoContent>
        <S.StudentContent>
          <StudentInfo />
        </S.StudentContent>
      </S.Container>
    </S.Wrapper>
  )
}

export default OnlineInterview
