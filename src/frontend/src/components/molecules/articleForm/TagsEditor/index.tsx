import React, { useState, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import * as S from './index.styled'
import { Input, Button } from '@/components/atoms'
import { tagsState } from '@/recoil/articleForm/atom'

type Props = {
  defaultValue?: string[]
}

export const TagsEditor: React.FC<Props> = ({ defaultValue = [] }) => {
  const setTags = useSetRecoilState(tagsState)
  const [inputTag, setInputTag] = useState<string>('')

  const addTag = () => {
    if (!inputTag) {
      alert('入力されたタグが空です')
      return
    }
    setTags((old) => [...old, inputTag])
    setInputTag('')
  }

  useEffect(() => {
    if (!defaultValue || defaultValue.length === 0) return
    setTags(defaultValue)
  }, [defaultValue, setTags])

  return (
    <S.InputTagBox>
      <S.InputTagBoxItem>
        <Input
          type="text"
          value={inputTag}
          onChange={(e) => setInputTag(e.target.value)}
        />
      </S.InputTagBoxItem>
      <S.InputTagBoxItem>
        <Button onClick={addTag}>タグを追加する</Button>
      </S.InputTagBoxItem>
    </S.InputTagBox>
  )
}
