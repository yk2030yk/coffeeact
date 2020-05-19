import React from 'react'

import * as S from './End.styled'

import { useInterviewContext } from '@/contexts/InterviewContext'

const End: React.FC = () => {
  const { isDisconnected } = useInterviewContext()
  return (
    <>
      {isDisconnected && (
        <S.Wrapper>
          <p>面談は終了しました。</p>
        </S.Wrapper>
      )}
    </>
  )
}

export default End
