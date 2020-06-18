import React from 'react'

import AppLayout from '../../../layouts/AppLayout'
import AdminArticleCreatePage from '@/components/pages/article/admin/AdminArticleCreatePage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <AdminArticleCreatePage />
    </AppLayout>
  )
}

export default PageContainer
