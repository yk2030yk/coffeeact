import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValueLoadable } from 'recoil'

import { ArticleEditFormPresenter } from './presenter'
import { articleState, useArticle } from '@/recoil/article'

export const ArticleEditForm: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>()
  useArticle(articleId)
  const loadable = useRecoilValueLoadable(articleState)

  return <ArticleEditFormPresenter articleId={articleId} loadable={loadable} />
}
