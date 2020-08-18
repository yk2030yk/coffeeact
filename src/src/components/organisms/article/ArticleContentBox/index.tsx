import React from 'react'
import { useRecoilValue } from 'recoil'

import { ArticleContentBoxPresenter } from './presenter'
import { loadableSelector } from '@/recoil/loadable'

export const ArticleContentBox = () => {
  const loadable = useRecoilValue(loadableSelector('article'))
  return <ArticleContentBoxPresenter loadable={loadable} />
}
