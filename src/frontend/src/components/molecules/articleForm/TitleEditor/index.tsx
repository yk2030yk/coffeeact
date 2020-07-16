import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './index.styled'
import { Input } from '@/components/atoms'

import { titleState } from '@/recoil/articleForm/atom'

type Props = {
  defaultValue?: string
}

export const TitleEditor: React.FC<Props> = ({ defaultValue = '' }) => {
  const [title, setTitle] = useRecoilState(titleState)

  useEffect(() => {
    if (!defaultValue) return
    setTitle(defaultValue)
  }, [defaultValue, setTitle])

  return (
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
}
