import React from 'react'

import { StorageImage } from '@/components/atoms'

type Props = {
  path: string
}

export const PreviewImageSrc: React.FC<Props> = ({ path }) => {
  return <StorageImage path={path} />
}
