import React, { useRef, useEffect } from 'react'
import { AudioTrack as TwilioAudioTrack } from 'twilio-video'

type Props = {
  track: TwilioAudioTrack
}

/**
 * オーディオtrack
 */
const AudioTrack: React.FC<Props> = ({ track }) => {
  const ref = useRef<HTMLAudioElement>(null!)

  useEffect(() => {
    const element = ref.current
    track.attach(element)
    return () => {
      track.detach(element)
    }
  }, [track])

  return <audio ref={ref} />
}

export default AudioTrack
