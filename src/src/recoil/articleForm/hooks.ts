import { useCallback } from 'react'
import { useRecoilValue } from 'recoil'

import {
  articleFormSelector,
  previewImageSrcBlobState,
} from '@/recoil/articleForm'
import { useAsyncTask } from '@/hooks/common/useAsyncTask'
import { storageService } from '@/service/storage/StorageService'
import { articlePagingService } from '@/service/firestore/ArticlePagingService'
import { articleService } from '@/service/firestore/ArticleService'
import { randomString } from '@/utils/util'

export const useCreateArticle = () => {
  const articleForm = useRecoilValue(articleFormSelector)
  const blob = useRecoilValue(previewImageSrcBlobState)

  return useAsyncTask(
    'createArticle',
    useCallback(async () => {
      const imgSrc = articleForm.imgSrc || `public/${randomString()}.png`
      if (blob) await storageService.put(imgSrc, blob)

      const id = await articleService.create({ ...articleForm, imgSrc })
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

      await articleService.update(articleId, {
        ...articleForm,
        imgSrc,
      })
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
