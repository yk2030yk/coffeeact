import React from 'react'

import ArticleLoadingPlaceholder from './ArticleLoadingPlaceholder'
import * as S from './index.styled'

const placeholderType = {
  default: 'default',
  article: 'article',
  image: 'image',
} as const

const Placeholders = {
  [placeholderType.default]: ArticleLoadingPlaceholder,
  [placeholderType.article]: ArticleLoadingPlaceholder,
  [placeholderType.image]: ArticleLoadingPlaceholder,
}

type Props = {
  type?: typeof placeholderType[keyof typeof placeholderType]
}

const LoadingPlaceholder: React.FC<Props> = ({ type = 'default' }) => {
  const Placeholder = Placeholders[type]
  return <S.Wrapper>{Placeholder && <Placeholder />}</S.Wrapper>
}

export default LoadingPlaceholder
