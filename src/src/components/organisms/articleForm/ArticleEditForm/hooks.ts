import { useParams } from 'react-router-dom'
import { useRecoilValueLoadable } from 'recoil'

import { articleState, useArticle } from '@/recoil/article'

export const useProps = () => {
  const { articleId } = useParams<{ articleId: string }>()
  useArticle(articleId)
  const loadable = useRecoilValueLoadable(articleState)

  return {
    articleId,
    loadable,
  }
}
