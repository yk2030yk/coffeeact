import { useEffect, useCallback } from 'react'
import { useSetRecoilState, useResetRecoilState } from 'recoil'

import { articleState, articlesState } from './atoms'
import { articleService } from '@/service/firestore/ArticleService'
import { useAsyncTask } from '@/hooks/common/useAsyncTask'

export const useArticle = (id: string) => {
  const setArticle = useSetRecoilState(articleState)
  const resetArticle = useResetRecoilState(articleState)

  const { execute } = useAsyncTask(
    'article',
    useCallback(async () => setArticle(await articleService.get(id)), [
      setArticle,
      id,
    ])
  )

  useEffect(() => {
    execute()
    return () => resetArticle()
  }, [execute, resetArticle])
}

export const useArticles = () => {
  const setArticles = useSetRecoilState(articlesState)
  const resetArticles = useResetRecoilState(articlesState)

  const { execute } = useAsyncTask(
    'articles',
    useCallback(async () => {
      setArticles(await articleService.getList())
    }, [setArticles])
  )

  useEffect(() => {
    execute()
    return () => resetArticles()
  }, [execute, resetArticles])
}
