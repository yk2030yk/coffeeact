import React from 'react'
import { LocalVideoTrack as TwilioLocalVideoTrack } from 'twilio-video'

import { useInterviewContext } from '@/contexts/InterviewContext'
import VideoTrack from './VideoTrack'

/**
 * 自分の映像プレビュー
 */
const LocalVideoTrack: React.FC = () => {
  const { localTracks } = useInterviewContext()

  const track = localTracks.find(
    (track) => track.kind === 'video'
  ) as TwilioLocalVideoTrack

  return <>{track && <VideoTrack track={track} />}</>
}

export default LocalVideoTrack
