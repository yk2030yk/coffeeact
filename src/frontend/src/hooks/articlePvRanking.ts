import { useState, useEffect } from 'react'

import { articlePVService } from '@/service/firestore/ArticlePVService'
import { articleService } from '@/service/firestore/ArticleService'
import { Article } from '@/models/Article'

export const useArticlePvRanking = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [articlePvList, setArticlePvList] = useState<
    {
      id: string
      pv: number
    }[]
  >([])

  useEffect(() => {
    const fetch = async () => {
      const pvList = await articlePVService.getArticlePvList(3)
      const list = await articleService.getListByIds(pvList.map((d) => d.id))
      setArticlePvList(pvList)
      setArticles(list)
    }
    fetch()
  }, [])

  return { articles, articlePvList }
}
