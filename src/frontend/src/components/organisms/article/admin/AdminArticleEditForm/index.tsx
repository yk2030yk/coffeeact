import React from 'react'
import { useParams } from 'react-router-dom'

import AdminArticleForm from '../AdminArticleForm'
import { Article } from '@/models/article/Article'
import { articleService } from '@/service/firestore/ArticleService'
import { useSnackbarMessages } from '@/recoil/global/snackbar/hooks'

const AdminArticleEditForm: React.FC = () => {
  const { articleId } = useParams()
  const { pushSnackbarMessage } = useSnackbarMessages()
  const handleSubmit = async (article: Article) => {
    try {
      await articleService.update(article.id, article)
      pushSnackbarMessage('更新に成功しました。', false)
    } catch (e) {
      pushSnackbarMessage('更新に失敗しました。', true)
    }
  }

  return <AdminArticleForm articleId={articleId} handleSubmit={handleSubmit} />
}

export default AdminArticleEditForm
