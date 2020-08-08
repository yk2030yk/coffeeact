import { useEffect, useCallback, useState } from 'react'
import { useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil'

import { articlesState, pageState, limitState } from './atoms'
import { articlePagingService } from '@/service/firestore/ArticlePagingService'
import { articleService } from '@/service/firestore/ArticleService'
import { Article } from '@/models/Article'
import { useAsyncTask } from '@/hooks/common/useAsyncTask'
import { useQuery } from '@/hooks/common/useQuery'

// const usePagingQuery = () => {
//   const query = useQuery()
//   const page = parseInt(query.get('page') || '0')
//   const limit = parseInt(query.get('limit') || '10')
//   return useState({ page, limit })
// }

export const useArticles = () => {
  const setArticles = useSetRecoilState(articlesState)
  const resetArticles = useResetRecoilState(articlesState)
  const page = useRecoilValue(pageState)
  const resetPage = useResetRecoilState(pageState)
  const limit = useRecoilValue(limitState)
  const resetLimit = useResetRecoilState(limitState)

  const { execute } = useAsyncTask(
    'articles',
    useCallback(async () => {
      const articlePagingList = await articlePagingService.getList(page, limit)
      const ids = articlePagingList.map((p) => p.id)
      const articles = await articleService.getListByIds(ids)
      const sortedArticles = ids.map((id) =>
        articles.find((a) => a.id === id)
      ) as Article[]
      setArticles(sortedArticles)
    }, [setArticles, page, limit])
  )

  useEffect(() => {
    execute()
    return () => {
      resetArticles()
      resetPage()
      resetLimit()
    }
  }, [execute, resetArticles, resetPage, resetLimit])
}
