import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValueLoadable } from 'recoil'

import { ArticleForm } from '../ArticleForm'
import { CreateButton } from '@/components/molecules/articleForm/CreateButton'
import { articleSelector } from '@/recoil/article/selectors'

export const ArticleEditForm: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>()
  const loadable = useRecoilValueLoadable(articleSelector(articleId))

  switch (loadable.state) {
    case 'hasValue':
      return (
        <ArticleForm
          article={loadable.contents}
          ActionButton={<CreateButton />}
        />
      )
    case 'loading':
      return null
    case 'hasError':
      return null
    default:
      return null
  }
}
