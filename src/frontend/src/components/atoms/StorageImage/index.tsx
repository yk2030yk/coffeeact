import React from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { storageDownloadURLsSelector } from '@/recoil/storage/selectors'
import LoadingPlaceholder from '../LoadingPlaceholder'

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
        return <img src={''} />
      }
    case 'loading':
      return <LoadingPlaceholder type="image" />
    default:
      return null
  }
}

export default Card
