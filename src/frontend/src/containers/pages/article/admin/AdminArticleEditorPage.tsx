import React from 'react'

import AppLayout from '../../../layouts/AppLayout'
import AdminArticleEditorPage from '@/components/pages/article/admin/AdminArticleEditorPage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <AdminArticleEditorPage />
    </AppLayout>
  )
}

export default PageContainer
