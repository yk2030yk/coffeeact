import React from 'react'
import { useHistory } from 'react-router-dom'

import AdminArticleForm from '../AdminArticleForm'
import { Article } from '@/models/article/Article'
import { articleService } from '@/service/firestore/ArticleService'

const AdminArticleCreateForm: React.FC = () => {
  const history = useHistory()

  const handleSubmit = async (article: Article) => {
    try {
      const id = await articleService.create(article)
      alert('success!!')
      history.push(`/admin/article/${id}`)
    } catch (e) {
      alert('error...')
    }
  }

  return <AdminArticleForm handleSubmit={handleSubmit} />
}

export default AdminArticleCreateForm
