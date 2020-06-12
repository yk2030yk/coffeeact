import React from 'react'

import * as S from './index.styled'
import Input from '@/components/atoms/common/Input'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

type Props = {
  register: any
  coffeeArticle: CoffeeArticle
}

const CoffeeArticleEditor: React.FC<Props> = ({ coffeeArticle, register }) => {
  return (
    <S.Wrapper>
      <Input
        type="text"
        name="title"
        defaultValue={coffeeArticle.title}
        ref={register}
      />
    </S.Wrapper>
  )
}

export default CoffeeArticleEditor
