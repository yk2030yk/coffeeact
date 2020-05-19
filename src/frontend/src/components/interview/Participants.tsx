import React from 'react'

import { useParticipants } from '@/hooks/useParticipants'
import Participant from './Participant'

/**
 * 参加者一覧
 */
const Participants: React.FC = () => {
  const { participants } = useParticipants()

  return (
    <div>
      {participants.map((participant) => (
        <Participant key={participant.identity} participant={participant} />
      ))}
    </div>
  )
}

export default Participants
