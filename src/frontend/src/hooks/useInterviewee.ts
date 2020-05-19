import { useState, useEffect, useCallback } from 'react'
import { RemoteParticipant } from 'twilio-video'

import { useParticipants } from './useParticipants'
import { useOnDisconnected } from './participant/useOnEvent'

/**
 * 面談相手
 */
export const useInterviewee = (intervieweeIdentity: string) => {
  const [interviewee, setInterviewee] = useState<RemoteParticipant>()
  const [isDisconnected, setIsDisconnected] = useState(false)
  const { participants } = useParticipants()

  useEffect(() => {
    const intervieweeParticipant = participants.find(
      (participant) => participant.identity === intervieweeIdentity
    )
    if (!intervieweeParticipant) return
    setInterviewee(intervieweeParticipant)
  }, [participants, intervieweeIdentity])

  const onDisconnected = useCallback(() => {
    setIsDisconnected(true)
  }, [setIsDisconnected])

  useOnDisconnected(interviewee, onDisconnected)

  return { interviewee, isDisconnected }
}
