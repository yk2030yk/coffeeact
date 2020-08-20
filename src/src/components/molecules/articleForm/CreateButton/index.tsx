import React from 'react'

import { CreateButtonPresenter } from './presenter'
import { useProps } from './hooks'

export const CreateButton: React.FC = () => (
  <CreateButtonPresenter {...useProps()} />
)
