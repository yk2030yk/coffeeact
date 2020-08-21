import React from 'react'

import { DescriptionEditorPresenter } from './presenter'
import { useProps } from './hooks'

type Props = {
  defaultValue?: string
}

export const DescriptionEditor: React.FC<Props> = ({ defaultValue = '' }) => (
  <DescriptionEditorPresenter {...useProps(defaultValue)} />
)
