import { useEffect } from 'react'

import { articlePVService } from '@/service/firestore/ArticlePVService'
import { articleLogService } from '@/service/firestore/ArticleLogService'

export const useArticlePageView = (articleId: string) => {
  useEffect(() => {
    if (!articleId) return
    articlePVService.push(articleId)
    articleLogService.push(articleId)
  }, [articleId])
}
