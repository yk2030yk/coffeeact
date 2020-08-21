import React from 'react'

import { TagEditorPresenter } from './presenter'

type Props = {
  defaultValue?: string[]
}

export const TagEditor: React.FC<Props> = ({ defaultValue = [] }) => (
  <TagEditorPresenter defaultValue={defaultValue} />
)
