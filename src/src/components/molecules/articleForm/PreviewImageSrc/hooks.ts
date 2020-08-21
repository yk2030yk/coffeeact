import { useEffect } from 'react'

import {
  imageSrcState,
  previewImageSrcBlobState,
  previewImageSrcBlobUrlSelector,
} from '@/recoil/articleForm'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useResetRecoilState } from 'recoil'

export const useProps = (defaultValue: string) => {
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

  return {
    imgSrc,
    blobUrl,
  }
}
