import React from 'react'

import { ImageSrcBoxPresenter } from './presenter'
import { useProps } from './hooks'

type Props = {
  defaultValue?: string
}

export const ImageSrcBox: React.FC<Props> = ({ defaultValue = '' }) => (
  <ImageSrcBoxPresenter defaultValue={defaultValue} {...useProps()} />
)
