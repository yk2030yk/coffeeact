import React from 'react'
import { useHistory } from 'react-router-dom'

import AdminArticleForm from '../AdminArticleForm'
import { Article } from '@/models/article/Article'
import { articleService } from '@/service/firestore/ArticleService'
import { useSnackbarMessages } from '@/recoil/global/snackbar/hooks'

const AdminArticleCreateForm: React.FC = () => {
  const history = useHistory()
  const { pushSnackbarMessage } = useSnackbarMessages()

  const handleSubmit = async (article: Article) => {
    try {
      const id = await articleService.create(article)
      pushSnackbarMessage('作成に成功しました。', false)
      history.push(`/admin/article/${id}`)
    } catch (e) {
      pushSnackbarMessage('作成に失敗しました。', true)
    }
  }

  return <AdminArticleForm handleSubmit={handleSubmit} />
}

export default AdminArticleCreateForm
