import React from 'react'

import AppLayout from '../../layouts/AppLayout'
import AdminArticlesPage from '@/components/pages/admin/AdminArticlesPage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <AdminArticlesPage />
    </AppLayout>
  )
}

export default PageContainer
