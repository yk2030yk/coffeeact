import React from 'react'

import { ArticleEditFormPresenter } from './presenter'
import { useProps } from './hooks'

export const ArticleEditForm: React.FC = () => {
  return <ArticleEditFormPresenter {...useProps()} />
}
