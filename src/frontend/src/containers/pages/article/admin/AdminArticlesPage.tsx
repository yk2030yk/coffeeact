import React from 'react'

import AppLayout from '../../../layouts/AppLayout'
import AdminArticleListPage from '@/components/pages/article/admin/AdminArticleListPage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <AdminArticleListPage />
    </AppLayout>
  )
}

export default PageContainer
