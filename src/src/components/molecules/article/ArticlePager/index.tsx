import React from 'react'

import { ArticlePagerPresenter } from './presenter'
import { useProps } from './hooks'

export const ArticlePager: React.FC = () => (
  <ArticlePagerPresenter {...useProps()} />
)
