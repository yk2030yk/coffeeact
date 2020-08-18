import { useCallback } from 'react'
import { useRecoilValue } from 'recoil'

import {
  articleFormSelector,
  previewImageSrcBlobState,
} from '@/recoil/articleForm'
import { useAsyncTask } from '@/hooks/useAsyncTask'
import { storageService } from '@/service/storage/StorageService'
import { articlePagingService, articleService } from '@/service/firestore'
import { randomString } from '@/utils/util'
import { Article } from '@/models'

export const useCreateArticle = () => {
  const articleForm = useRecoilValue(articleFormSelector)
  const blob = useRecoilValue(previewImageSrcBlobState)

  return useAsyncTask(
    'createArticle',
    useCallback(async () => {
      const imgSrc = articleForm.imgSrc || `public/${randomString()}.png`
      if (blob) await storageService.put(imgSrc, blob)

      const article = new Article({ ...articleForm, imgSrc })
      const id = await articleService.create(article)
      await articlePagingService.push(id)

      return id
    }, [articleForm, blob])
  )
}

export const useUpdateArticle = (articleId: string) => {
  const articleForm = useRecoilValue(articleFormSelector)
  const blob = useRecoilValue(previewImageSrcBlobState)

  return useAsyncTask(
    'updateArticle',
    useCallback(async () => {
      const imgSrc = articleForm.imgSrc || `public/${randomString()}.png`
      if (blob) await storageService.put(imgSrc, blob)

      const article = new Article({ ...articleForm, imgSrc })
      await articleService.update(articleId, article)
    }, [articleForm, blob, articleId])
  )
}

export const useDeleteArticle = (articleId: string) => {
  const articleForm = useRecoilValue(articleFormSelector)

  return useAsyncTask(
    'deleteArticle',
    useCallback(async () => {
      storageService.delete(articleForm.imgSrc)
      await articleService.delete(articleId)
    }, [articleId, articleForm])
  )
}
