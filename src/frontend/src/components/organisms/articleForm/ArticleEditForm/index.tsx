import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValueLoadable } from 'recoil'

import { ArticleForm } from '../ArticleForm'
import { UpdateButton } from '@/components/molecules/articleForm/UpdateButton'
import { DeleteButton } from '@/components/molecules/articleForm/DeleteButton'
import { articleSelector } from '@/recoil/article/selectors'

export const ArticleEditForm: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>()
  const loadable = useRecoilValueLoadable(articleSelector(articleId))

  switch (loadable.state) {
    case 'hasValue':
      return (
        <ArticleForm
          article={loadable.contents}
          ActionButton={
            <>
              <UpdateButton articleId={articleId} />
              <DeleteButton articleId={articleId} />
            </>
          }
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
