import React from 'react'

import AppLayout from '../../../layouts/AppLayout'
import AdminCoffeeArticleEditorPage from '@/components/pages/coffeeArticle/admin/AdminCoffeeArticleEditorPage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <AdminCoffeeArticleEditorPage />
    </AppLayout>
  )
}

export default PageContainer
