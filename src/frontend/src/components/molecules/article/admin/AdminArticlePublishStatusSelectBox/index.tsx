import React from 'react'

import * as S from './index.styled'
import { SelectBox, Option } from '@/components/atoms'
import { Article } from '@/models/article/Article'

type Props = {
  options: {
    value: string
    label: string
  }[]
  register: any
  article: Article
}

const ArticleEditor: React.FC<Props> = ({ options, article, register }) => {
  return (
    <S.Wrapper>
      <SelectBox
        name="publishStatus"
        defaultValue={article.publishStatus}
        ref={register}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectBox>
    </S.Wrapper>
  )
}

export default ArticleEditor
