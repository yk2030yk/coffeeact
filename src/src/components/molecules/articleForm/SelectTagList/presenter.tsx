import React from 'react'

import * as S from './styled'
import { BasicBox, Heading2, Tag } from '@/components/atoms'

type Props = {
  tags: string[]
  tagList: string[]
  addTag: (tag: string) => void
}

export const SelectTagListPresenter: React.FC<Props> = ({
  tags,
  tagList,
  addTag,
}) => (
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
