import React from 'react'

import * as S from './index.styled'

import InputText from '@/components/atoms/article/InputText'
import TextArea from '@/components/atoms/article/TextArea'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

type Props = {
  register: any
}

const CoffeeArticleEditor: React.FC<Props> = ({ register }) => (
  <S.Wrapper>
    <S.TitleInputText>
      <InputText name="title" value="" register={register} />
    </S.TitleInputText>
    <S.DescriptionTextArea>
      <TextArea name="description" value="" register={register} />
    </S.DescriptionTextArea>
  </S.Wrapper>
)

export default CoffeeArticleEditor
