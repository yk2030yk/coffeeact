import React from 'react'

import * as S from './index.styled'
import { TextArea } from '@/components/atoms'
import { Article } from '@/models/article/Article'

type Props = {
  register: any
  article: Article
}

const ArticleEditor: React.FC<Props> = ({ article, register }) => {
  return (
    <S.Wrapper>
      <TextArea
        name="description"
        defaultValue={article.description}
        ref={register}
      />
    </S.Wrapper>
  )
}

export default ArticleEditor
