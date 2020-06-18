import React, { useState } from 'react'

import * as S from './index.styled'
import { Input, Button } from '@/components/atoms'
import { Article } from '@/models/article/Article'

type Props = {
  article: Article
  updateModel: (value: any) => void
}

const ArticleEditor: React.FC<Props> = ({ article, updateModel }) => {
  const [inputTag, setInputTag] = useState<string>('')
  const handleChange = (e: any) => setInputTag(e.target.value)

  const addTag = () => {
    if (!inputTag) {
      alert('入力されたタグが空です')
      return
    }
    updateModel({ tags: [...article.tags, inputTag] })
    setInputTag('')
  }

  return (
    <S.InputTagBox>
      <S.InputTagBoxItem>
        <Input type="text" value={inputTag} onChange={handleChange} />
      </S.InputTagBoxItem>
      <S.InputTagBoxItem>
        <Button onClick={addTag}>タグを追加する</Button>
      </S.InputTagBoxItem>
    </S.InputTagBox>
  )
}

export default ArticleEditor
