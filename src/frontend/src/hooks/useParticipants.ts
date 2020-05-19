import { useState, useCallback } from 'react'
import { RemoteParticipant } from 'twilio-video'

import { useInterviewContext } from '@/contexts/InterviewContext'
import { useOnParticipantConnected } from './room/useOnEvent'

/**
 * 参加者
 */
export const useParticipants = () => {
  const { room } = useInterviewContext()
  const [participants, setParticipants] = useState<RemoteParticipant[]>(
    room ? Array.from(room.participants.values()) : []
  )

  const onParticipantConnected = useCallback(
    (participant: RemoteParticipant) => {
      setParticipants((prevParticipants: RemoteParticipant[]) => [
        ...prevParticipants,
        participant,
      ])
    },
    []
  )

  useOnParticipantConnected(room, onParticipantConnected)

  return {
    participants,
  }
}
