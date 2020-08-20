import React from 'react'

import { ArticleTagEditorPresenter } from './presenter'
import { useProps } from './hooks'

export const ArticleTagEditor: React.FC = () => (
  <ArticleTagEditorPresenter {...useProps()} />
)
