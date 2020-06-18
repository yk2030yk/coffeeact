import React from 'react'

import * as S from './index.styled'
import { TextArea } from '@/components/atoms'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

type Props = {
  register: any
  coffeeArticle: CoffeeArticle
}

const CoffeeArticleEditor: React.FC<Props> = ({ coffeeArticle, register }) => {
  return (
    <S.Wrapper>
      <TextArea
        name="description"
        defaultValue={coffeeArticle.description}
        ref={register}
      />
    </S.Wrapper>
  )
}

export default CoffeeArticleEditor
