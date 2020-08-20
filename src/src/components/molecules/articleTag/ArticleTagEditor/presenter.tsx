import React from 'react'

import * as S from './styled'
import { Input, Button } from '@/components/atoms'

type Props = {
  inputTag: string
  setInputTag: (tag: string) => void
  addTag: () => void
}

export const ArticleTagEditorPresenter: React.FC<Props> = ({
  inputTag,
  setInputTag,
  addTag,
}) => {
  return (
    <S.InputTagBox>
      <S.InputTagBoxItem>
        <Input
          type="text"
          value={inputTag}
          maxLength={10}
          onChange={(e) => setInputTag(e.target.value)}
        />
      </S.InputTagBoxItem>
      <S.InputTagBoxItem>
        <Button onClick={addTag}>タグを追加する</Button>
      </S.InputTagBoxItem>
    </S.InputTagBox>
  )
}
