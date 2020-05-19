import { useEffect, useState, useCallback } from 'react'
import {
  LocalTrackPublication,
  Participant,
  RemoteTrackPublication,
} from 'twilio-video'

import {
  useOnTrackPublished,
  useOnTrackUnpublished,
} from './participant/useOnEvent'

type TrackPublication = LocalTrackPublication | RemoteTrackPublication

export const usePublications = (participant: Participant) => {
  const [publications, setPublications] = useState<TrackPublication[]>([])

  useEffect(() => {
    setPublications(
      Array.from(participant.tracks.values()) as TrackPublication[]
    )
  }, [participant])

  const onTrackPublished = useCallback(
    (publication: TrackPublication) =>
      setPublications((prevPublications) => [...prevPublications, publication]),
    []
  )

  const onTrackUnpublished = useCallback(
    (publication: TrackPublication) =>
      setPublications((prevPublications) =>
        prevPublications.filter((p) => p !== publication)
      ),
    []
  )

  useOnTrackPublished(participant, onTrackPublished)
  useOnTrackUnpublished(participant, onTrackUnpublished)

  return { publications }
}
