import React from 'react'

import * as S from './styled'
import { Tag } from '@/components/atoms'

type Props = {
  tags: string[]
}

export const ArticleTags: React.FC<Props> = ({ tags }) => {
  return (
    <S.Tags>
      {tags.length > 0 && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
    </S.Tags>
  )
}
