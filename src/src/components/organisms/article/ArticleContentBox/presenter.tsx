import React from 'react'

import {
  ArticleContent,
  ArticleContentLoadingPlaceholder,
} from '@/components/molecules/article'
import { Loadable } from '@/models'

type Props = {
  loadable: Loadable
}

export const ArticleContentBoxPresenter: React.FC<Props> = ({ loadable }) => {
  if (loadable.isLoaded) {
    return <ArticleContent />
  } else {
    return <ArticleContentLoadingPlaceholder />
  }
}
