import React, { useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom'

import { SubmitButton } from '@/components/atoms'
import {
  isValidSelector,
  articleFormSelector,
} from '@/recoil/articleForm/selector'
import { articleService } from '@/service/firestore/ArticleService'
import { storageService } from '@/service/storage/StorageService'
import { useAsyncTask } from '@/hooks/common/useAsyncTask'

type Props = {
  articleId: string
}

export const DeleteButton: React.FC<Props> = ({ articleId }) => {
  const history = useHistory()
  const isValid = useRecoilValue(isValidSelector)
  const articleForm = useRecoilValue(articleFormSelector)

  const { execute, loadable } = useAsyncTask(
    'deleteArticle',
    useCallback(async () => {
      storageService.delete(articleForm.imgSrc)
      await articleService.delete(articleId)
      history.push('/admin/articles')
    }, [articleId, articleForm, history])
  )

  return (
    <SubmitButton
      type="submit"
      disabled={!isValid || loadable.isLoading()}
      onClick={execute}
      value={'削除する'}
    />
  )
}
