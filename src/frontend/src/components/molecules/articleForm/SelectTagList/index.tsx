import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'

import * as S from './index.styled'
import { BasicBox, Heading2, Tag } from '@/components/atoms'
import { tagsState } from '@/recoil/articleForm/atom'
import { tagListState } from '@/recoil/articleTag/atoms'
import { useArticleTagList } from '@/recoil/articleTag/hooks'

type Props = {
  defaultValue?: string[]
}

export const SelectTagList: React.FC<Props> = ({ defaultValue = [] }) => {
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

  return (
    <>
      <BasicBox>
        <Heading2>使用できるタグ</Heading2>
      </BasicBox>
      <BasicBox>
        <S.TagList>
          {tagList
            .filter((tag) => tags.indexOf(tag) === -1)
            .map((tag) => (
              <S.TagItem key={tag}>
                <Tag onClick={() => addTag(tag)}>{tag}</Tag>
              </S.TagItem>
            ))}
        </S.TagList>
      </BasicBox>
    </>
  )
}
