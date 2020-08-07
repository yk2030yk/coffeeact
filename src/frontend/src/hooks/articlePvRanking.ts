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
      const list = await articleService.getListByIds(
        pvList.map((data) => data.id)
      )
      const sortedList = pvList.map((pv) =>
        list.find((i) => i.id === pv.id)
      ) as Article[]

      setArticlePvList(pvList)
      setArticles(sortedList)
    }
    fetch()
  }, [])

  return { articles, articlePvList }
}
