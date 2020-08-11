import React from 'react'
import { useRecoilValue } from 'recoil'

import {
  ArticleContent,
  ArticleContentLoadingPlaceholder,
} from '@/components/molecules/article'
import { loadableSelector } from '@/recoil/loadable'

export const ArticleContentBox: React.FC = () => {
  const loadable = useRecoilValue(loadableSelector('article'))

  if (loadable.isLoaded) {
    return <ArticleContent />
  } else {
    return <ArticleContentLoadingPlaceholder />
  }
}
