import { useHistory } from 'react-router-dom'

import { useSnackbarMessages } from '@/recoil/snackbar'
import { useDeleteArticle } from '@/recoil/articleForm'

export const useProps = (articleId: string) => {
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

  return {
    loadable,
    handleClick,
  }
}
