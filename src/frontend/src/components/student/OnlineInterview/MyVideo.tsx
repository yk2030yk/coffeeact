import React from 'react'

import * as S from './MyVideo.styled'
import LocalVideoTrack from '@/components/interview/LocalVideoTrack'
import LocalAudioTrack from '@/components/interview/LocalAudioTrack'

const MyVideo: React.FC = () => {
  return (
    <S.Wrapper>
      <LocalVideoTrack />
      <LocalAudioTrack />
    </S.Wrapper>
  )
}

export default MyVideo
