import React from 'react'

import { InputImageSrcPresenter } from './presenter'
import { useProps } from './hooks'

export const InputImageSrc: React.FC = () => (
  <InputImageSrcPresenter {...useProps()} />
)
