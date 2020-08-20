import { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'

import { tagsState } from '@/recoil/articleForm'
import { tagListState, useArticleTagList } from '@/recoil/articleTag'

export const useProps = (defaultValue: string[]) => {
  useArticleTagList()
  const [tags, setTags] = useRecoilState(tagsState)
  const reset = useResetRecoilState(tagsState)
  const tagList = useRecoilValue(tagListState)

  const addTag = (tag: string) => {
    setTags((old) => [...old, tag])
  }

  useEffect(() => {
    if (defaultValue && defaultValue.length !== 0) setTags(defaultValue)
    return () => reset()
  }, [defaultValue, setTags, reset])

  return {
    tags,
    tagList,
    addTag,
  }
}
