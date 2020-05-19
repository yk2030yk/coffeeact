import { useState, useCallback } from 'react'
import { VideoTrack as TwilioVideoTrack } from 'twilio-video'

import { useOnStarted } from './track/useOnEvent'

export const useVideoTrack = (track: TwilioVideoTrack) => {
  const [started, setStarted] = useState(track.isStarted)

  const onStared = useCallback(() => {
    setStarted(true)
  }, [])

  useOnStarted(track, onStared)

  return { started }
}
