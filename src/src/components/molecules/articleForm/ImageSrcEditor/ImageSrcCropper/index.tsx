import React from 'react'

import { ImageSrcCropperPresenter } from './presenter'
import { useProps } from './hooks'

export const ImageSrcCropper: React.FC = () => (
  <ImageSrcCropperPresenter {...useProps()} />
)
