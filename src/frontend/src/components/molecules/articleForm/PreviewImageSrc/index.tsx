import React, { useEffect } from 'react'

import { StorageImage } from '@/components/atoms'
import { imageSrcState } from '@/recoil/articleForm/atom'
import { previewImageSrcBlobUrlSelector } from '@/recoil/articleForm/selector'
import { useRecoilState, useRecoilValue } from 'recoil'

type Props = {
  defaultValue?: string
}

export const PreviewImageSrc: React.FC<Props> = ({ defaultValue }) => {
  const [imgSrc, setImgSrc] = useRecoilState(imageSrcState)
  const blobUrl = useRecoilValue(previewImageSrcBlobUrlSelector)

  useEffect(() => {
    if (!defaultValue) return
    setImgSrc(defaultValue)
  }, [defaultValue, setImgSrc])

  return <>{blobUrl ? <img src={blobUrl} /> : <StorageImage path={imgSrc} />}</>
}
