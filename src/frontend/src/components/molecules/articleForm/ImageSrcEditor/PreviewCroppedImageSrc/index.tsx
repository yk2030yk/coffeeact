import React from 'react'
import { useRecoilValue } from 'recoil'
import 'react-image-crop/dist/ReactCrop.css'

import { Text } from '@/components/atoms'
import { croppedImageSrcState } from '@/recoil/articleForm/atom'

export const PreviewCroppedImageSrc: React.FC = () => {
  const croppedSrc = useRecoilValue(croppedImageSrcState)
  return (
    <>
      <Text>トリミング結果</Text>
      {croppedSrc && <img src={croppedSrc} alt="" />}
    </>
  )
}
