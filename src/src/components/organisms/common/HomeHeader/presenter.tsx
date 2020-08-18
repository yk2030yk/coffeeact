import React from 'react'

import * as S from './styled'
import AppName from '@/components/molecules/header/AppName'

type Props = {
  bgSrc: string
}

export const HomeHeaderPresenter: React.FC<Props> = ({ bgSrc }) => (
  <S.Wrapper bgSrc={bgSrc}>
    <S.Overlay>
      <S.Item>
        <AppName />
      </S.Item>
    </S.Overlay>
  </S.Wrapper>
)
