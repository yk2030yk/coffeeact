import React from 'react'
import { RemoteParticipant } from 'twilio-video'

import Publications from './Publications'

type Prop = {
  participant: RemoteParticipant
}

/**
 * 参加者
 */
const Participant: React.FC<Prop> = ({ participant }) => {
  return <Publications participant={participant} />
}

export default Participant
