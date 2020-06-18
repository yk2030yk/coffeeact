import React from 'react'

import * as S from './index.styled'
import { Article } from '@/models/article/Article'
import { RiCloseLine } from 'react-icons/ri'

type Props = {
  article: Article
  updateModel: (value: any) => void
}

const ArticleEditor: React.FC<Props> = ({ article, updateModel }) => {
  const deleteTag = (tag: string) => {
    if (!window.confirm('タグを削除してもよろしいですか？')) return
    updateModel({ tags: article.tags.filter((t) => t !== tag) })
  }

  return (
    <S.TagList>
      {article.tags.map((tag) => (
        <S.TagLabel key={tag} onClick={() => deleteTag(tag)}>
          <S.Tag>{tag}</S.Tag>
          <RiCloseLine size={20} />
        </S.TagLabel>
      ))}
    </S.TagList>
  )
}

export default ArticleEditor
