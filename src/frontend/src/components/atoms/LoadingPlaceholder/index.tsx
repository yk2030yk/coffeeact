import React from 'react'

import * as loadingPlaceholders from './loadingPlaceholders'
import * as S from './index.styled'

const placeholderType = {
  default: 'default',
  article: 'article',
  image: 'image',
} as const

const Placeholders = {
  [placeholderType.default]: loadingPlaceholders.ArticleLoadingPlaceholder,
  [placeholderType.article]: loadingPlaceholders.ArticleLoadingPlaceholder,
  [placeholderType.image]: loadingPlaceholders.ImageLoadingPlaceholder,
}

type Props = {
  type?: typeof placeholderType[keyof typeof placeholderType]
}

const LoadingPlaceholder: React.FC<Props> = ({ type = 'default' }) => {
  const Placeholder = Placeholders[type]
  return <S.Wrapper>{Placeholder && <Placeholder />}</S.Wrapper>
}

export default LoadingPlaceholder
