import React, { useEffect } from 'react'
import { useInterviewContext } from '@/contexts/InterviewContext'
import { useHistory } from 'react-router-dom'

import * as S from './index.styled'
import VideoContent from './VideoContent'
import End from './End'

const OnlineInterview: React.FC = () => {
  const history = useHistory()
  const { roomName, isConnecting, isDisconnected } = useInterviewContext()

  useEffect(() => {
    if (!isDisconnected) return
    history.push(`/student/${roomName}/complete`)
  }, [isDisconnected, roomName, history])

  if (isConnecting) return <p>loading...</p>

  return (
    <>
      <End />
      <S.Wrapper>
        <S.VideoContent>
          <VideoContent />
        </S.VideoContent>
      </S.Wrapper>
    </>
  )
}

export default OnlineInterview
