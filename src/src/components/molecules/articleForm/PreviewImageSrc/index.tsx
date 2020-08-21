import React from 'react'

import { PreviewImageSrcPresenter } from './presenter'
import { useProps } from './hooks'

type Props = {
  defaultValue?: string
}

export const PreviewImageSrc: React.FC<Props> = ({ defaultValue = '' }) => (
  <PreviewImageSrcPresenter {...useProps(defaultValue)} />
)
