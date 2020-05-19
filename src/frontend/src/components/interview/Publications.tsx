import React from 'react'
import { RemoteParticipant } from 'twilio-video'

import * as S from './Publications.styled'
import Publication from './Publication'
import { usePublications } from '@/hooks/usePublications'

type Props = {
  participant: RemoteParticipant
}

/**
 * 公開されているtracks
 */
const Publications: React.FC<Props> = ({ participant }) => {
  const { publications } = usePublications(participant)

  return (
    <S.Wrapper>
      {publications.map((publication) => (
        <Publication key={participant.identity} publication={publication} />
      ))}
    </S.Wrapper>
  )
}

export default Publications
