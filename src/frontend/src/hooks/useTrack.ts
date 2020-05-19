import { useEffect, useState, useCallback } from 'react'
import { LocalTrackPublication, RemoteTrackPublication } from 'twilio-video'

import { useOnSubscribed, useOnUnsubscribed } from './publication/useOnEvent'

export const useTrack = (
  publication: LocalTrackPublication | RemoteTrackPublication | undefined
) => {
  const [track, setTrack] = useState(publication && publication.track)

  useEffect(() => {
    if (!publication) return
    setTrack(publication.track)
  }, [publication])

  const subscribed = useCallback((track) => {
    setTrack(track)
  }, [])

  const unsubscribed = useCallback(() => {
    setTrack(null)
  }, [])

  useOnSubscribed(publication, subscribed)
  useOnUnsubscribed(publication, unsubscribed)

  return { track }
}
