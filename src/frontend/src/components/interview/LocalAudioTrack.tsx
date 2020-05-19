import React from 'react'
import { LocalAudioTrack as TwilioLocalAudioTrack } from 'twilio-video'

import { useInterviewContext } from '@/contexts/InterviewContext'
import AudioTrack from './AudioTrack'

/**
 * 自分のオーディオtrack
 */
const LocalAudioTrack: React.FC = () => {
  const { localTracks } = useInterviewContext()

  const track = localTracks.find(
    (track) => track.kind === 'audio'
  ) as TwilioLocalAudioTrack

  return <>{track && <AudioTrack track={track} />}</>
}

export default LocalAudioTrack
