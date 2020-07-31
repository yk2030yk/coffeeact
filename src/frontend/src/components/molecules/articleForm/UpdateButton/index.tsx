import React from 'react'
import { useRecoilValue } from 'recoil'

import { SubmitButton } from '@/components/atoms'
import {
  previewImageSrcBlobState,
  isValidSelector,
  articleFormSelector,
} from '@/recoil/articleForm'
import { articleService } from '@/service/firestore/ArticleService'
import { useUploadImage } from '@/hooks/storage/useUploadImage'
import { randomString } from '@/utils/util'
import { useAsyncTask } from '@/hooks/common/useAsyncTask'
import { useSnackbarMessages } from '@/recoil/global/snackbar/hooks'

type Props = {
  articleId: string
}

export const UpdateButton: React.FC<Props> = ({ articleId }) => {
  const isValid = useRecoilValue(isValidSelector)
  const articleForm = useRecoilValue(articleFormSelector)
  const blob = useRecoilValue(previewImageSrcBlobState)
  const { upload } = useUploadImage()
  const { pushSnackbarMessage } = useSnackbarMessages()

  const { execute, loadable } = useAsyncTask('updateArticle', async () => {
    const imgSrc = articleForm.imgSrc || `public/${randomString()}.png`
    if (blob) await upload(imgSrc, blob)
    await articleService.update(articleId, {
      ...articleForm,
      imgSrc,
    })
    pushSnackbarMessage('更新しました。', false)
  })

  return (
    <SubmitButton
      type="submit"
      disabled={!isValid || loadable.isLoading()}
      onClick={execute}
      value={'更新する'}
    />
  )
}
