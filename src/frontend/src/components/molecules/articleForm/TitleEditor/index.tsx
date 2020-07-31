import React, { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import * as S from './index.styled'
import { Input } from '@/components/atoms'
import { titleState } from '@/recoil/articleForm/atom'

type Props = {
  defaultValue?: string
}

export const TitleEditor: React.FC<Props> = ({ defaultValue = '' }) => {
  const [title, setTitle] = useRecoilState(titleState)
  const reset = useResetRecoilState(titleState)

  useEffect(() => {
    if (defaultValue) setTitle(defaultValue)
    return () => reset()
  }, [defaultValue, setTitle, reset])

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
