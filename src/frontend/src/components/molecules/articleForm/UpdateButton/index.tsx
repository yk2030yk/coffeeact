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

type Props = {
  articleId: string
}

export const UpdateButton: React.FC<Props> = ({ articleId }) => {
  const isValid = useRecoilValue(isValidSelector)
  const articleForm = useRecoilValue(articleFormSelector)
  const blob = useRecoilValue(previewImageSrcBlobState)
  const { upload } = useUploadImage()

  const { execute, isLoading } = useAsyncTask(async () => {
    const imgSrc = articleForm.imgSrc || `public/${randomString()}.png`
    if (blob) await upload(imgSrc, blob)
    await articleService.update(articleId, {
      ...articleForm,
      imgSrc,
    })
  })

  return (
    <SubmitButton
      type="submit"
      disabled={!isValid || isLoading}
      onClick={execute}
      value={'更新する'}
    />
  )
}
