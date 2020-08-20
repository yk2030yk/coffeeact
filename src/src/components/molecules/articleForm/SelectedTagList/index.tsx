import React from 'react'

import { SelectedTagListPresenter } from './presenter'
import { useProps } from './hooks'

export const SelectedTagList: React.FC = () => (
  <SelectedTagListPresenter {...useProps()} />
)
