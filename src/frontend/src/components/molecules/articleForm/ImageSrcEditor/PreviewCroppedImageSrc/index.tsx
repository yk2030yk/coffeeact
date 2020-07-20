import React from 'react'
import { useRecoilValue } from 'recoil'
import 'react-image-crop/dist/ReactCrop.css'

import { croppedImageSrcState } from '@/recoil/articleForm/atom'

export const PreviewCroppedImageSrc: React.FC = () => {
  const croppedSrc = useRecoilValue(croppedImageSrcState)
  return <>{croppedSrc && <img src={croppedSrc} alt="" />}</>
}
