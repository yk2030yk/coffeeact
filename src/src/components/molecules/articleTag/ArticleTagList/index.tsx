import React from 'react'
import { useRecoilValue } from 'recoil'

import * as S from './styled'
import {
  tagListState,
  useArticleTagList,
  useFetchArticleTagList,
} from '@/recoil/articleTag'
import { articleTagService } from '@/service/firestore'
import { Button } from '@/components/atoms'

export const ArticleTagList: React.FC = () => {
  const fetch = useFetchArticleTagList()
  useArticleTagList()
  const tagList = useRecoilValue(tagListState)

  const handleDeleteButton = async (name: string) => {
    await articleTagService.delete(name)
    fetch()
  }

  return (
    <S.TagListBox>
      {tagList.map((name) => (
        <S.TagListItem key={name}>
          <p>{name}</p>
          <Button onClick={() => handleDeleteButton(name)}>削除</Button>
        </S.TagListItem>
      ))}
    </S.TagListBox>
  )
}
