import React from 'react'
import { useRecoilValue } from 'recoil'

import { SubmitButton } from '@/components/atoms'
import { useSnackbarMessages } from '@/recoil/snackbar'
import { isValidSelector, useUpdateArticle } from '@/recoil/articleForm'

type Props = {
  articleId: string
}

export const UpdateButton: React.FC<Props> = ({ articleId }) => {
  const isValid = useRecoilValue(isValidSelector)
  const { execute, loadable } = useUpdateArticle(articleId)
  const pushSnackbarMessage = useSnackbarMessages()

  const handleClick = async () => {
    try {
      await execute()
      pushSnackbarMessage('更新に成功しました。', false)
    } catch (e) {
      pushSnackbarMessage('更新に失敗しました。', true)
    }
  }

  return (
    <SubmitButton
      type="submit"
      disabled={!isValid || loadable.isLoading()}
      onClick={() => handleClick()}
      value={'更新する'}
    />
  )
}
