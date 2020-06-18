import React from 'react'

import * as S from './index.styled'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'
import { RiCloseLine } from 'react-icons/ri'

type Props = {
  coffeeArticle: CoffeeArticle
  updateModel: (value: any) => void
}

const CoffeeArticleEditor: React.FC<Props> = ({
  coffeeArticle,
  updateModel,
}) => {
  const deleteTag = (tag: string) => {
    if (!window.confirm('タグを削除してもよろしいですか？')) return
    updateModel({ tags: coffeeArticle.tags.filter((t) => t !== tag) })
  }

  return (
    <S.TagList>
      {coffeeArticle.tags.map((tag) => (
        <S.TagLabel key={tag} onClick={() => deleteTag(tag)}>
          <S.Tag>{tag}</S.Tag>
          <RiCloseLine size={20} />
        </S.TagLabel>
      ))}
    </S.TagList>
  )
}

export default CoffeeArticleEditor
