import React from 'react'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

type Props = {
  inputImageSrc: string
  crop: Crop
  handleImageLoaded: (e: HTMLImageElement) => void
  handleCrop: (crop: Crop) => Promise<void>
  handelComplete: () => Promise<void>
}

export const ImageSrcCropperPresenter: React.FC<Props> = ({
  inputImageSrc,
  crop,
  handleImageLoaded,
  handleCrop,
  handelComplete,
}) => (
  <ReactCrop
    src={inputImageSrc}
    crop={crop}
    onImageLoaded={handleImageLoaded}
    onChange={handleCrop}
    onComplete={handelComplete}
  />
)
