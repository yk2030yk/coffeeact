import { useState, useCallback, useEffect } from 'react'

import { articleService } from '@/service/firestore/ArticleService'
import { Article } from '@/models/article/Article'
import { useAsyncTask } from '../common/useAsyncTask'
import { isBetween } from '@/utils/date'

export const useArticle = (id?: string) => {
  const [article, setArticle] = useState<Article>()

  const asyncTask = useAsyncTask(
    useCallback(async () => {
      if (!id) {
        setArticle(new Article({}))
        return
      }
      const article = await articleService.get(id)
      setArticle(article)
    }, [id])
  )

  const updateModel = useCallback(
    async (value: any) => {
      if (!article) return
      setArticle(
        (article) =>
          new Article({ ...(article ? article.toJson() : {}), ...value })
      )
    },
    [article]
  )

  const { execute } = asyncTask
  useEffect(() => {
    execute()
  }, [execute])

  return { article, updateModel, ...asyncTask }
}

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([])

  const asyncTask = useAsyncTask(
    useCallback(async () => {
      const articles = await articleService.getList()
      setArticles(articles)
    }, [])
  )

  const { execute } = asyncTask
  useEffect(() => {
    execute()
  }, [execute])

  return { articles, ...asyncTask }
}

export type FilterCondition = {
  title?: string
  description?: string
  tags?: string
  between?: {
    start: Date
    end: Date
  }
  limit?: number
}

const matchFilterCondition = (article: Article, condition: FilterCondition) => {
  const { title, description, tags, between } = condition

  const isMatch = () => {
    if (!title && !description && !tags) return true
    return (
      (title && article.title.indexOf(title) !== -1) ||
      (description && article.description.indexOf(description) !== -1) ||
      (tags && article.tags.indexOf(tags) !== -1)
    )
  }

  const isBetweenDate = () => {
    if (!between) return true
    return (
      article.updatedAt &&
      isBetween(article.updatedAt.toDate(), between.start, between.end)
    )
  }

  return isMatch() && isBetweenDate()
}

export const useArticlesFilter = (articles: Article[]) => {
  const filterArticles = useCallback(
    (condition: FilterCondition) => {
      let filtered = articles.filter((a) => matchFilterCondition(a, condition))

      const { limit } = condition
      if (limit) filtered = filtered.slice(0, limit)

      return filtered
    },
    [articles]
  )

  return filterArticles
}

export const useNewArrivalArticles = () => {
  const [articles, setArticles] = useState<Article[]>([])

  const asyncTask = useAsyncTask(
    useCallback(async () => {
      const articles = await articleService.newArrivalList(8)
      setArticles(articles)
    }, [])
  )

  const { execute } = asyncTask
  useEffect(() => {
    execute()
  }, [execute])

  return { articles, ...asyncTask }
}
