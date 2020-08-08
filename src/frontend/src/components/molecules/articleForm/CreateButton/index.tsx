import React from 'react'
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom'

import { SubmitButton } from '@/components/atoms'
import {
  isValidSelector,
  articleFormSelector,
  previewImageSrcBlobState,
} from '@/recoil/articleForm'
import { useSnackbarMessages } from '@/recoil/snackbar'
import { useAsyncTask } from '@/hooks/common/useAsyncTask'
import { storageService } from '@/service/storage/StorageService'
import { articlePagingService } from '@/service/firestore/ArticlePagingService'
import { articleService } from '@/service/firestore/ArticleService'
import { randomString } from '@/utils/util'

export const CreateButton: React.FC = () => {
  const history = useHistory()
  const isValid = useRecoilValue(isValidSelector)
  const articleForm = useRecoilValue(articleFormSelector)
  const blob = useRecoilValue(previewImageSrcBlobState)
  const { pushSnackbarMessage } = useSnackbarMessages()

  const { execute, loadable } = useAsyncTask('createArticle', async () => {
    const imgSrc = articleForm.imgSrc || `public/${randomString()}.png`
    if (blob) await storageService.put(imgSrc, blob)

    const id = await articleService.create({ ...articleForm, imgSrc })
    await articlePagingService.push(id)

    pushSnackbarMessage('作成に成功しました。', false)
    history.push(`/admin/article/${id}`)
  })

  return (
    <SubmitButton
      type="submit"
      disabled={!isValid || loadable.isLoading()}
      onClick={() => execute()}
      value={'作成する'}
    />
  )
}
