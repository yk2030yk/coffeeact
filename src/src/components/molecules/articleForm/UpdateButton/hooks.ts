import { useRecoilValue } from 'recoil'

import { useSnackbarMessages } from '@/recoil/snackbar'
import { isValidSelector, useUpdateArticle } from '@/recoil/articleForm'

export const useProps = (articleId: string) => {
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

  return {
    isValid,
    loadable,
    handleClick,
  }
}
