import React from 'react'

import { TitleEditorPresenter } from './presenter'
import { useProps } from './hooks'

type Props = {
  defaultValue?: string
}

export const TitleEditor: React.FC<Props> = ({ defaultValue = '' }) => (
  <TitleEditorPresenter {...useProps(defaultValue)} />
)
