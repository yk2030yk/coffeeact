import React from 'react'

import * as S from './index.styled'
import { Input } from '@/components/atoms'
import { Article } from '@/models/article/Article'

type Props = {
  register: any
  article: Article
}

const ArticleEditor: React.FC<Props> = ({ article, register }) => {
  return (
    <S.Wrapper>
      <Input
        type="text"
        name="title"
        defaultValue={article.title}
        ref={register}
      />
    </S.Wrapper>
  )
}

export default ArticleEditor
