import React from 'react'
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom'

import { SubmitButton } from '@/components/atoms'
import { previewImageSrcBlobState } from '@/recoil/articleForm/atom'
import {
  isValidSelector,
  articleFormSelector,
} from '@/recoil/articleForm/selector'
import { articleService } from '@/service/firestore/ArticleService'
import { useUploadImage } from '@/hooks/storage/useUploadImage'
import { randomString } from '@/utils/util'
import { useAsyncTask } from '@/hooks/common/useAsyncTask'
import { useSnackbarMessages } from '@/recoil/global/snackbar/hooks'

export const CreateButton: React.FC = () => {
  const history = useHistory()
  const isValid = useRecoilValue(isValidSelector)
  const articleForm = useRecoilValue(articleFormSelector)
  const blob = useRecoilValue(previewImageSrcBlobState)
  const { upload } = useUploadImage()
  const { pushSnackbarMessage } = useSnackbarMessages()

  const { execute, isLoading } = useAsyncTask(async () => {
    const imgSrc = articleForm.imgSrc || `public/${randomString()}.png`
    if (blob) await upload(imgSrc, blob)
    const id = await articleService.create({ ...articleForm, imgSrc })
    pushSnackbarMessage('記事作成に成功しました。', false)
    history.push(`/admin/article/${id}`)
  })

  return (
    <SubmitButton
      type="submit"
      disabled={!isValid || isLoading}
      onClick={execute}
      value={'作成する'}
    />
  )
}
