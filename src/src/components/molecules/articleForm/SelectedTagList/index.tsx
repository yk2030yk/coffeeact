import React from 'react'
import { useRecoilState } from 'recoil'

import * as S from './styled'
import { BasicBox, Tag, Heading2 } from '@/components/atoms'
import { tagsState } from '@/recoil/articleForm'

export const SelectedTagList: React.FC = () => {
  const [tags, setTags] = useRecoilState(tagsState)

  const deleteTag = (tag: string) => {
    setTags((old) => old.filter((t) => t !== tag))
  }

  return (
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
}
