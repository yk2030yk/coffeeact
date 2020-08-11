import React from 'react'
import { useRecoilValueLoadable } from 'recoil'
import ContentLoader from 'react-content-loader'

import { storageDownloadURLsSelector } from '@/recoil/storage/selectors'

export const ImageLoader: React.FC = () => (
  <ContentLoader viewBox="0 0 100 50" style={{ width: '100%' }}>
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
)

type Props = {
  path: string
}

const Card: React.FC<Props> = ({ path }) => {
  const loadable = useRecoilValueLoadable(storageDownloadURLsSelector(path))

  switch (loadable.state) {
    case 'hasValue':
      if (loadable.contents) {
        return <img src={loadable.contents} alt="" />
      } else {
        return <img src={''} alt="" />
      }
    case 'loading':
      return <ImageLoader />
    default:
      return null
  }
}

export default Card
