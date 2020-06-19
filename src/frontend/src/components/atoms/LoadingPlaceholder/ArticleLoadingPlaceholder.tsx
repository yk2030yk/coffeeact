import React from 'react'
import ContentLoader from 'react-content-loader'

const ArticleLoadingPlaceholder: React.FC = () => (
  <ContentLoader viewBox="0 0 380 70">
    <rect x="0" y="0" rx="3" ry="3" width="70" height="70" />
    <rect x="80" y="5" rx="3" ry="3" width="100%" height="5" />
    <rect x="80" y="20" rx="3" ry="3" width="100%" height="5" />
    <rect x="80" y="35" rx="3" ry="3" width="100%" height="5" />
  </ContentLoader>
)

export default ArticleLoadingPlaceholder
