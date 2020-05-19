import React from 'react'

import * as S from './RemainingTime.styled'
import Timer from '@/components/common/Timer'

const RemainingTime: React.FC = () => {
  return (
    <S.Text>
      残り時間
      <S.Time>
        <Timer maxTime={60 * 60} />
      </S.Time>
    </S.Text>
  )
}

export default RemainingTime
