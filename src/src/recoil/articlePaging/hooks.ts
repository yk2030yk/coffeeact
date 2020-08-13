import { useEffect, useCallback } from 'react'
import { useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil'

import { articlesState, articlePagingListState } from './atoms'
import { pageArticlePagingListSelector } from './selectors'
import { articlePagingService } from '@/service/firestore/ArticlePagingService'
import { articleService } from '@/service/firestore/ArticleService'
import { Article } from '@/models/Article'
import { useAsyncTask } from '@/hooks/useAsyncTask'

export const useArticlePaging = () => {
  const setArticlePagingListState = useSetRecoilState(articlePagingListState)
  const resetArticlePagingListState = useResetRecoilState(
    articlePagingListState
  )

  const { execute } = useAsyncTask(
    'getArticlePagingListAll',
    useCallback(async () => {
      const articlePagingList = await articlePagingService.getListAll()
      setArticlePagingListState(articlePagingList)
    }, [setArticlePagingListState])
  )

  useEffect(() => {
    execute()
    return () => {
      resetArticlePagingListState()
    }
  }, [execute, resetArticlePagingListState])
}

export const useArticles = () => {
  const pageArticlePagingList = useRecoilValue(pageArticlePagingListSelector)
  const setArticles = useSetRecoilState(articlesState)
  const resetArticles = useResetRecoilState(articlesState)

  const { execute } = useAsyncTask(
    'articles',
    useCallback(async () => {
      const ids = pageArticlePagingList.map((p) => p.id)
      if (ids.length === 0) return

      const articles = await articleService.getListByIds(ids)
      const sortedArticles = ids.map((id) =>
        articles.find((a) => a.id === id)
      ) as Article[]
      setArticles(sortedArticles)
    }, [pageArticlePagingList, setArticles])
  )

  useEffect(() => {
    execute()
    return () => {
      resetArticles()
    }
  }, [execute, resetArticles])
}
