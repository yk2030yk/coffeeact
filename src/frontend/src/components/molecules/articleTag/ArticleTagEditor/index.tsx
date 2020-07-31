import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'

import * as S from './index.styled'
import { Input, Button } from '@/components/atoms'
import { articleTagService } from '@/service/firestore/ArticleTagService'
import { tagListState, useFetchArticleTagList } from '@/recoil/articleTag'

const validateInputTag = (inputTag: string, tagList: string[]) => {
  if (!inputTag) return '入力されたタグが空です'
  if (inputTag.length > 10) return '入力されたタグが不正'
  if (tagList.indexOf(inputTag) > -1) return 'すでに存在しているタグです'
}

export const ArticleTagEditor: React.FC = () => {
  const tagList = useRecoilValue(tagListState)
  const fetch = useFetchArticleTagList()
  const [inputTag, setInputTag] = useState<string>('')

  const addTag = async () => {
    const errorMessage = validateInputTag(inputTag, tagList)
    if (errorMessage) {
      alert(errorMessage)
    } else {
      await articleTagService.create(inputTag)
      setInputTag('')
      fetch()
    }
  }

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
