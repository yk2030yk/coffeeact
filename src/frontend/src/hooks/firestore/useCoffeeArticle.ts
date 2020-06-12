import { useState, useCallback, useEffect } from 'react'
import { coffeeArticleService } from '@/service/firestore/CoffeeArticleService'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'
import { FaAmericanSignLanguageInterpreting } from 'react-icons/fa'

export const useCoffeeArticle = (id: string) => {
  const [coffeeArticle, setCoffeeArticle] = useState<CoffeeArticle>()

  const fetch = useCallback(async () => {
    if (!id) return
    const article = await coffeeArticleService.get(id)
    setCoffeeArticle(article)
  }, [id])

  useEffect(() => {
    fetch()
  }, [fetch])

  return coffeeArticle
}

export const useCoffeeArticles = () => {
  const [coffeeArticles, setCoffeeArticles] = useState<CoffeeArticle[]>([])

  const fetch = useCallback(async () => {
    const articles = await coffeeArticleService.getList()
    setCoffeeArticles(articles)
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  return coffeeArticles
}

type FilterCondition = {
  title?: string
  description?: string
  between?: {
    start: string
    end: string
  }
  limit?: number
}

const matchFilterCondition = (
  coffeeArticle: CoffeeArticle,
  condition: FilterCondition
) => {
  const { title, description } = condition

  if (title && coffeeArticle.title.indexOf(title) == -1) return false

  if (description && coffeeArticle.description.indexOf(description) == -1)
    return false

  return true
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

  const fetch = useCallback(async () => {
    const articles = await coffeeArticleService.newArrivalList(8)
    setCoffeeArticles(articles)
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  return coffeeArticles
}
