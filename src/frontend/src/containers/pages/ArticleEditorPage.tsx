import React from 'react'
import AppLayout from '../layouts/AppLayout'
import ArticleEditorPage from '@/components/pages/ArticleEditorPage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <ArticleEditorPage />
    </AppLayout>
  )
}

export default PageContainer
