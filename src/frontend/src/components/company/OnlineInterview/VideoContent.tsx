import React from 'react'

import * as S from './VideoContent.styled'
import MyVideo from './MyVideo'
import StudentVideo from './StudentVideo'
import RemainingTime from './RemainingTime'

const VideoContent: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Both>
        <StudentVideo />
        <MyVideo />
      </S.Both>
      <S.RemainingTime>
        <RemainingTime />
      </S.RemainingTime>
    </S.Wrapper>
  )
}

export default VideoContent
