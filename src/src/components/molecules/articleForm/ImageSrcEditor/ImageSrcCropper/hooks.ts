import { useState } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { Crop } from 'react-image-crop'

import { getCroppedBlob } from './util'
import {
  inputImageSrcState,
  croppedImageSrcState,
  previewImageSrcBlobState,
} from '@/recoil/articleForm'

const aspect = 16 / 8

export const useProps = () => {
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

  return {
    crop,
    inputImageSrc,
    handleImageLoaded,
    handleCrop,
    handelComplete,
  }
}
