import React from 'react'

import * as S from './styled'
import { BasicBox, Tag, Heading2 } from '@/components/atoms'

type Props = {
  tags: string[]
  deleteTag: (tag: string) => void
}

export const SelectedTagListPresenter: React.FC<Props> = ({
  tags,
  deleteTag,
}) => (
  <>
    <BasicBox>
      <Heading2>採用中のタグ</Heading2>
    </BasicBox>
    <BasicBox>
      {tags.length > 0 ? (
        <S.TagList>
          {tags.map((tag) => (
            <S.TagItem key={tag}>
              <Tag onClick={() => deleteTag(tag)}>{tag}</Tag>
            </S.TagItem>
          ))}
        </S.TagList>
      ) : (
        <div>タグを設定してください</div>
      )}
    </BasicBox>
  </>
)
