import React from 'react'
import { useParams } from 'react-router-dom'

import AdminArticleForm from '../AdminArticleForm'
import { Article } from '@/models/article/Article'
import { articleService } from '@/service/firestore/ArticleService'

const AdminArticleEditForm: React.FC = () => {
  const { articleId } = useParams()

  const handleSubmit = async (article: Article) => {
    try {
      await articleService.update(article)
      alert('success!!')
    } catch (e) {
      alert('error...')
    }
  }

  return <AdminArticleForm articleId={articleId} handleSubmit={handleSubmit} />
}

export default AdminArticleEditForm
