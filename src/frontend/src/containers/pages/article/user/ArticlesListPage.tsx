import React from 'react'
import AppLayout from '../../../layouts/AppLayout'
import ArticleListPage from '@/components/pages/article/user/ArticleListPage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <ArticleListPage />
    </AppLayout>
  )
}

export default PageContainer
