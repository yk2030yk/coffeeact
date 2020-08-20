import { useState } from 'react'
import { useRecoilValue } from 'recoil'

import { articleTagService } from '@/service/firestore'
import { tagListState, useFetchArticleTagList } from '@/recoil/articleTag'

const validateInputTag = (inputTag: string, tagList: string[]) => {
  if (!inputTag) return '入力されたタグが空です'
  if (inputTag.length > 10) return '入力されたタグが不正'
  if (tagList.indexOf(inputTag) > -1) return 'すでに存在しているタグです'
}

export const useProps = () => {
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

  return {
    addTag,
    setInputTag,
    inputTag,
  }
}
