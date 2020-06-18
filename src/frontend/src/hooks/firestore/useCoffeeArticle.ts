import { useState, useCallback, useEffect } from 'react'

import { coffeeArticleService } from '@/service/firestore/CoffeeArticleService'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'
import { useAsyncTask } from '../common/useAsyncTask'
import { isBetween } from '@/utils/date'

export const useCoffeeArticle = (id?: string) => {
  const [coffeeArticle, setCoffeeArticle] = useState<CoffeeArticle>()

  const asyncTask = useAsyncTask(
    useCallback(async () => {
      if (!id) {
        setCoffeeArticle(new CoffeeArticle({}))
        return
      }
      const article = await coffeeArticleService.get(id)
      setCoffeeArticle(article)
    }, [id])
  )

  const updateModel = useCallback(
    async (value: any) => {
      if (!coffeeArticle) return
      setCoffeeArticle(
        (article) =>
          new CoffeeArticle({ ...(article ? article.toJson() : {}), ...value })
      )
    },
    [coffeeArticle]
  )

  const { execute } = asyncTask
  useEffect(() => {
    execute()
  }, [execute])

  return { coffeeArticle, updateModel, ...asyncTask }
}

export const useCoffeeArticles = () => {
  const [coffeeArticles, setCoffeeArticles] = useState<CoffeeArticle[]>([])

  const asyncTask = useAsyncTask(
    useCallback(async () => {
      const articles = await coffeeArticleService.getList()
      setCoffeeArticles(articles)
    }, [])
  )

  const { execute } = asyncTask
  useEffect(() => {
    execute()
  }, [execute])

  return { coffeeArticles, ...asyncTask }
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

const matchFilterCondition = (
  coffeeArticle: CoffeeArticle,
  condition: FilterCondition
) => {
  const { title, description, tags, between } = condition

  const isMatch = () => {
    if (!title && !description && !tags) return true
    return (
      (title && coffeeArticle.title.indexOf(title) !== -1) ||
      (description && coffeeArticle.description.indexOf(description) !== -1) ||
      (tags && coffeeArticle.tags.indexOf(tags) !== -1)
    )
  }

  const isBetweenDate = () => {
    if (!between) return true
    return (
      coffeeArticle.updatedAt &&
      isBetween(coffeeArticle.updatedAt.toDate(), between.start, between.end)
    )
  }

  return isMatch() && isBetweenDate()
}

export const useCoffeeArticlesFilter = (coffeeArticles: CoffeeArticle[]) => {
  const filterCoffeeArticles = useCallback(
    (condition: FilterCondition) => {
      let filtered = coffeeArticles.filter((a) =>
        matchFilterCondition(a, condition)
      )

      const { limit } = condition
      if (limit) filtered = filtered.slice(0, limit)

      return filtered
    },
    [coffeeArticles]
  )

  return filterCoffeeArticles
}

export const useNewArrivalCoffeeArticles = () => {
  const [coffeeArticles, setCoffeeArticles] = useState<CoffeeArticle[]>([])

  const asyncTask = useAsyncTask(
    useCallback(async () => {
      const articles = await coffeeArticleService.newArrivalList(8)
      setCoffeeArticles(articles)
    }, [])
  )

  const { execute } = asyncTask
  useEffect(() => {
    execute()
  }, [execute])

  return { coffeeArticles, ...asyncTask }
}
