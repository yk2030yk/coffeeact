import React, { useEffect } from 'react'

import { StorageImage } from '@/components/atoms'
import {
  imageSrcState,
  previewImageSrcBlobState,
  previewImageSrcBlobUrlSelector,
} from '@/recoil/articleForm'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useResetRecoilState } from 'recoil'

type Props = {
  defaultValue?: string
}

export const PreviewImageSrc: React.FC<Props> = ({ defaultValue }) => {
  const [imgSrc, setImgSrc] = useRecoilState(imageSrcState)
  const blobUrl = useRecoilValue(previewImageSrcBlobUrlSelector)
  const resetBlob = useResetRecoilState(previewImageSrcBlobState)
  const reset = useResetRecoilState(imageSrcState)

  useEffect(() => {
    if (defaultValue) setImgSrc(defaultValue)
    return () => {
      reset()
      resetBlob()
    }
  }, [defaultValue, setImgSrc, reset, resetBlob])

  return (
    <>
      {blobUrl ? <img src={blobUrl} alt="" /> : <StorageImage path={imgSrc} />}
    </>
  )
}
