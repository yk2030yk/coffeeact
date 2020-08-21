import { useEffect } from 'react'

import { articlePVService, articleLogService } from '@/service/firestore'

export const useArticlePageView = (articleId: string) => {
  useEffect(() => {
    if (!articleId) return
    articlePVService.push(articleId)
    articleLogService.push(articleId)
  }, [articleId])
}
