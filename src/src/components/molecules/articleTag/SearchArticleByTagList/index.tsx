import React from 'react'

import { SearchArticleByTagListPresenter } from './presenter'
import { useProps } from './hooks'

export const SearchArticleByTagList: React.FC = () => (
  <SearchArticleByTagListPresenter {...useProps()} />
)
