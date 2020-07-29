import React from 'react'
import { useRecoilValue } from 'recoil'

import * as S from './index.styled'
import { tagListState } from '@/recoil/articleTag/atoms'
import { useArticleTagList } from '@/recoil/articleTag/hooks'

export const ArticleTagList: React.FC = () => {
  useArticleTagList()
  const tagList = useRecoilValue(tagListState)

  return (
    <S.TagListBox>
      {tagList.map((tag) => (
        <S.TagListItem key={tag}>{tag}</S.TagListItem>
      ))}
    </S.TagListBox>
  )
}
