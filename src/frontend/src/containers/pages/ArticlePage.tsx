import React from 'react'
import AppLayout from '../layouts/AppLayout'
import ArticlePage from '@/components/pages/ArticlePage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <ArticlePage />
    </AppLayout>
  )
}

export default PageContainer