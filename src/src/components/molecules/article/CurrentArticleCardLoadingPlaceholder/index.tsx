import React from 'react'
import ContentLoader from 'react-content-loader'

import * as S from './styled'

export const ImageLoader: React.FC = () => (
  <ContentLoader viewBox="0 0 100 50" style={{ width: '100%' }}>
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
)

export const DateLoader: React.FC = () => (
  <ContentLoader
    viewBox="0 0 100 3"
    style={{ width: '100%', marginTop: '5px' }}
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
)

export const TitleLoader: React.FC = () => (
  <ContentLoader viewBox="0 0 100 3" style={{ width: '50%', marginTop: '5px' }}>
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
)

export const CurrentArticleCardLoadingPlaceholder: React.FC = () => {
  return (
    <S.Wrapper>
      <ImageLoader />
      <DateLoader />
      <TitleLoader />
    </S.Wrapper>
  )
}
