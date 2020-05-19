import React from 'react'

import * as S from './StopButton.styled'
import { useInterviewContext } from '@/contexts/InterviewContext'

const StopButton: React.FC = () => {
  const { complete, isInterviewing } = useInterviewContext()
  const handleClick = () => complete()
  return (
    <S.Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      disabled={!isInterviewing}
    >
      面談を終了する
    </S.Button>
  )
}

export default StopButton
