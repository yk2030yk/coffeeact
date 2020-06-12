import React from 'react'

import AppLayout from '../../layouts/AppLayout'
import AdminArticlePage from '@/components/pages/admin/AdminArticlePage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <AdminArticlePage />
    </AppLayout>
  )
}

export default PageContainer
