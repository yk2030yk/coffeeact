import React from 'react'

import * as S from './styled'
import { Button } from '@/components/atoms'

type Props = {
  tagList: string[]
  handleDeleteButton: (name: string) => void
}

export const ArticleTagListPresenter: React.FC<Props> = ({
  tagList,
  handleDeleteButton,
}) => (
  <S.TagListBox>
    {tagList.map((name) => (
      <S.TagListItem key={name}>
        <p>{name}</p>
        <Button onClick={() => handleDeleteButton(name)}>削除</Button>
      </S.TagListItem>
    ))}
  </S.TagListBox>
)
