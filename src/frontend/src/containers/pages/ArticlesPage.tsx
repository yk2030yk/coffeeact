import React from 'react'
import AppLayout from '../layouts/AppLayout'
import ArticlesPage from '@/components/pages/ArticlesPage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <ArticlesPage />
    </AppLayout>
  )
}

export default PageContainer
