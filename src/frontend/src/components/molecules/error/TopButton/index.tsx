import React from 'react'

import * as S from './index.styled'
import { LinkButton } from '@/components/atoms'

const Page: React.FC = () => (
  <S.TopButtonBox>
    <LinkButton link="/" text="ホームに戻る" />
  </S.TopButtonBox>
)

export default Page
