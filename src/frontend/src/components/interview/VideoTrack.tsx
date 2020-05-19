import React, { useEffect, useRef } from 'react'
import { VideoTrack as TwilioVideoTrack } from 'twilio-video'

import * as S from './VideoTrack.styled'
import VideoLoading from './VideoLoading'
import { useVideoTrack } from '@/hooks/useVideoTrack'

type Props = {
  track: TwilioVideoTrack
}

/**
 * 映像track
 */
const VideoTrack: React.FC<Props> = ({ track }) => {
  const { started } = useVideoTrack(track)
  const ref = useRef<HTMLVideoElement>(null!)

  useEffect(() => {
    const element = ref.current
    element.muted = true
    track.attach(element)
    return () => {
      track.detach(element)
    }
  }, [track])

  return (
    <>
      {!started && <VideoLoading />}
      <S.Video preload="none" ref={ref} />
    </>
  )
}

export default VideoTrack
