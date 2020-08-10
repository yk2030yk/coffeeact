import React from 'react'
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom'

import { SubmitButton } from '@/components/atoms'
import { useSnackbarMessages } from '@/recoil/snackbar'
import { isValidSelector, useCreateArticle } from '@/recoil/articleForm'

export const CreateButton: React.FC = () => {
  const isValid = useRecoilValue(isValidSelector)
  const { execute, loadable } = useCreateArticle()
  const pushSnackbarMessage = useSnackbarMessages()
  const history = useHistory()

  const handleClick = async () => {
    try {
      const id = await execute()
      if (!id) return
      pushSnackbarMessage('作成に成功しました。', false)
      history.push(`/admin/article/${id}`)
    } catch (e) {
      pushSnackbarMessage('作成に失敗しました。', true)
    }
  }

  return (
    <SubmitButton
      type="submit"
      disabled={!isValid || loadable.isLoading}
      onClick={() => handleClick()}
      value={'作成する'}
    />
  )
}
