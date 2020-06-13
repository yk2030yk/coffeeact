import React, { useState } from 'react'

import * as S from './index.styled'
import { Input, Button } from '@/components/atoms'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

type Props = {
  coffeeArticle: CoffeeArticle
  updateModel: (value: any) => void
}

const CoffeeArticleEditor: React.FC<Props> = ({
  coffeeArticle,
  updateModel,
}) => {
  const [inputTag, setInputTag] = useState<string>('')
  const handleChange = (e: any) => setInputTag(e.target.value)

  const addTag = () => {
    if (!inputTag) {
      alert('入力されたタグが空です')
      return
    }
    updateModel({ tags: [...coffeeArticle.tags, inputTag] })
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

export default CoffeeArticleEditor
