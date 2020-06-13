import React from 'react'

import { useDownloadURL } from '@/hooks/storage/useDownloadURL'

type Props = {
  path: string
}

const Card: React.FC<Props> = ({ path }) => {
  const downloadUrl = useDownloadURL(path)
  return <>{downloadUrl && <img src={downloadUrl} alt="" />}</>
}

export default Card
