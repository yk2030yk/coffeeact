import React from 'react'
import {
  LocalTrackPublication,
  RemoteTrackPublication,
  VideoTrack as TwilioVideoTrack,
  AudioTrack as TwilioAudioTrack,
} from 'twilio-video'

import { useTrack } from '@/hooks/useTrack'
import VideoTrack from './VideoTrack'
import AudioTrack from './AudioTrack'

type Props = {
  publication: LocalTrackPublication | RemoteTrackPublication
}

/**
 * 公開されているtrack
 */
const Publication: React.FC<Props> = ({ publication }) => {
  const { track } = useTrack(publication)

  if (!track) return null

  switch (track.kind) {
    case 'video':
      return <VideoTrack track={track as TwilioVideoTrack} />
    case 'audio':
      return <AudioTrack track={track as TwilioAudioTrack} />
    default:
      return null
  }
}

export default Publication
