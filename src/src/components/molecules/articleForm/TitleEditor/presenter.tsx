import React from 'react'

import * as S from './styled'
import { Input } from '@/components/atoms'

type Props = {
  title: string
  setTitle: (title: string) => void
}

export const TitleEditorPresenter: React.FC<Props> = ({ title, setTitle }) => (
  <S.Wrapper>
    <Input
      type="text"
      name="title"
      defaultValue={title}
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  </S.Wrapper>
)
