import { useEffect, useCallback } from 'react'
import { useSetRecoilState, useResetRecoilState } from 'recoil'

import { articleState } from './atoms'
import { articleService } from '@/service/firestore/ArticleService'
import { useAsyncTask } from '@/hooks/common/useAsyncTask'

export const useArticle = (id: string) => {
  const setArticle = useSetRecoilState(articleState)
  const resetArticle = useResetRecoilState(articleState)

  const { execute } = useAsyncTask(
    'article',
    useCallback(async () => {
      const article = await articleService.get(id)
      if (article) setArticle(article)
    }, [setArticle, id])
  )

  useEffect(() => {
    execute()
    return () => resetArticle()
  }, [execute, resetArticle])
}
