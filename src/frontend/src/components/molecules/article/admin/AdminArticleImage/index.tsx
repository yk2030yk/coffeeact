import React from 'react'

import { StorageImage } from '@/components/atoms'

type Props = {
  src: string | undefined
  path: string
}

const AdminArticleImage: React.FC<Props> = ({ src, path }) => {
  if (src) return <img src={src} alt="" />
  return <StorageImage path={path} />
}

export default AdminArticleImage
