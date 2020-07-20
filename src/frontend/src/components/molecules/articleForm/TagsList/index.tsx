import React from 'react'
import { useRecoilState } from 'recoil'
import { RiCloseLine } from 'react-icons/ri'

import * as S from './index.styled'
import { Tag } from '@/components/atoms'
import { tagsState } from '@/recoil/articleForm/atom'

export const TagsList: React.FC = () => {
  const [tags, setTags] = useRecoilState(tagsState)

  const deleteTag = (tag: string) => {
    if (!window.confirm('タグを削除してもよろしいですか？')) return
    setTags((old) => old.filter((t) => t !== tag))
  }

  return (
    <>
      {tags.length > 0 ? (
        <S.TagList>
          {tags.map((tag) => (
            <Tag key={tag} onClick={() => deleteTag(tag)}>
              {tag}
            </Tag>
          ))}
        </S.TagList>
      ) : (
        <div>タグを設定してください</div>
      )}
    </>
  )
}
