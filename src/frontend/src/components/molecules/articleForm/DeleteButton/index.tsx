import React, { useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom'

import { SubmitButton } from '@/components/atoms'
import { useSnackbarMessages } from '@/recoil/snackbar'
import { useDeleteArticle } from '@/recoil/articleForm'

type Props = {
  articleId: string
}

export const DeleteButton: React.FC<Props> = ({ articleId }) => {
  const history = useHistory()
  const { execute, loadable } = useDeleteArticle(articleId)
  const pushSnackbarMessage = useSnackbarMessages()

  const handleClick = async () => {
    try {
      await execute()
      pushSnackbarMessage('削除に成功しました。', false)
      history.push('/admin/articles')
    } catch (e) {
      pushSnackbarMessage('削除に成功しました。', false)
    }
  }

  return (
    <SubmitButton
      type="submit"
      disabled={loadable.isLoading()}
      onClick={() => handleClick()}
      value={'削除する'}
    />
  )
}
