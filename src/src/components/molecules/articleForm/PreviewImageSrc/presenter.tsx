import React from 'react'

import { StorageImage } from '@/components/atoms'

type Props = {
  blobUrl: string
  imgSrc: string
}

export const PreviewImageSrcPresenter: React.FC<Props> = ({
  blobUrl,
  imgSrc,
}) => (
  <>{blobUrl ? <img src={blobUrl} alt="" /> : <StorageImage path={imgSrc} />}</>
)
