import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import * as S from './index.styled'
import { TextArea } from '@/components/atoms'
import { descriptionState } from '@/recoil/articleForm/atom'
import { useResetRecoilState } from 'recoil'

type Props = {
  defaultValue?: string
}

export const DescriptionEditor: React.FC<Props> = ({ defaultValue = '' }) => {
  const [description, setDescription] = useRecoilState(descriptionState)
  const reset = useResetRecoilState(descriptionState)

  useEffect(() => {
    if (defaultValue) setDescription(defaultValue)
    return () => reset()
  }, [defaultValue, setDescription, reset])

  return (
    <S.Wrapper>
      <TextArea
        name="description"
        defaultValue={description}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </S.Wrapper>
  )
}
