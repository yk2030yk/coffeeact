import React from 'react'
import ContentLoader from 'react-content-loader'

import * as S from './index.styled'

const Loader: React.FC = () => (
  <ContentLoader viewBox="0 0 100 150" style={{ width: '100%' }}>
    <rect x="0" y="0" rx="1" ry="1" width="15" height="2" />
    <rect x="10" y="5" rx="0" ry="0" width="80" height="30" />
    <rect x="0" y="38" rx="1" ry="1" width="5" height="3" />
    <rect x="6" y="38" rx="1" ry="1" width="5" height="3" />
    <rect x="12" y="38" rx="1" ry="1" width="5" height="3" />
    <rect x="0" y="44" rx="1" ry="1" width="100%" height="2" />
    <rect x="0" y="48" rx="1" ry="1" width="95%" height="2" />
    <rect x="0" y="52" rx="1" ry="1" width="90%" height="2" />
  </ContentLoader>
)

export const ArticleContentLoadingPlaceholder: React.FC = () => (
  <S.Wrapper>
    <Loader />
  </S.Wrapper>
)
