import React from 'react'

import * as S from './index.styled'

import InputText from '@/components/atoms/article/InputText'
import TextArea from '@/components/atoms/article/TextArea'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

type Props = {}

const CoffeeArticleEditor: React.FC<Props> = () => (
  <S.Wrapper>
    <S.TitleInputText>
      <InputText value="" />
    </S.TitleInputText>
    <S.DescriptionTextArea>
      <TextArea value="" />
    </S.DescriptionTextArea>
  </S.Wrapper>
)

export default CoffeeArticleEditor
