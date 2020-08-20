import React from 'react'

import { ArticleContentBoxPresenter } from './presenter'
import { useProps } from './hooks'

export const ArticleContentBox = () => {
  return <ArticleContentBoxPresenter {...useProps()} />
}
