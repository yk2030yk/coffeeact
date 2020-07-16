import React, { useState } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import { getCroppedBlob } from './util'
import { Text } from '@/components/atoms'
import {
  inputImageSrcState,
  croppedImageSrcState,
  previewImageSrcBlobState,
} from '@/recoil/articleForm/atom'

const aspect = 16 / 8

export const ImageSrcCropper: React.FC = () => {
  const inputImageSrc = useRecoilValue(inputImageSrcState)
  const setCroppedImageSrc = useSetRecoilState(croppedImageSrcState)
  const setPreviewImageSrcBlob = useSetRecoilState(previewImageSrcBlobState)
  const [image, setImage] = useState<HTMLImageElement>(new Image())
  const [crop, setCrop] = useState<Crop>({ aspect })

  const handleImageLoaded = (image: HTMLImageElement) => setImage(image)
  const handleCrop = async (newCrop: Crop) => setCrop(newCrop)

  const handelComplete = async () => {
    try {
      const blob = await getCroppedBlob(image, crop)
      const src = URL.createObjectURL(blob)
      setPreviewImageSrcBlob(blob)
      setCroppedImageSrc(src)
    } catch (e) {
      /**  */
    }
  }

  return (
    <>
      <Text>元画像</Text>
      <ReactCrop
        src={inputImageSrc}
        crop={crop}
        onImageLoaded={handleImageLoaded}
        onChange={handleCrop}
        onComplete={handelComplete}
      />
    </>
  )
}
