import React from 'react'
import { useParams } from 'react-router-dom'

import AdminArticleForm from '../AdminArticleForm'
import { Article } from '@/models/article/Article'
import { articleService } from '@/service/firestore/ArticleService'
import { usePageContext } from '@/contexts/PageContext'

const AdminArticleEditForm: React.FC = () => {
  const { articleId } = useParams()
  const { pushSnackbarMessage } = usePageContext()

  const handleSubmit = async (article: Article) => {
    try {
      await articleService.update(article)
      pushSnackbarMessage('更新に成功しました。')
    } catch (e) {
      pushSnackbarMessage('更新に失敗しました。', true)
    }
  }

  return <AdminArticleForm articleId={articleId} handleSubmit={handleSubmit} />
}

export default AdminArticleEditForm
