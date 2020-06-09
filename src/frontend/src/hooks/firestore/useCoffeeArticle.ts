import { useState, useCallback, useEffect } from 'react'
import { coffeeArticleService } from '@/service/firestore/CoffeeArticleService'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

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
