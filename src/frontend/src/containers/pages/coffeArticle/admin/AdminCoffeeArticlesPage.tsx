import React from 'react'

import AppLayout from '../../../layouts/AppLayout'
import AdminCoffeeArticleListPage from '@/components/pages/coffeeArticle/admin/AdminCoffeeArticleListPage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <AdminCoffeeArticleListPage />
    </AppLayout>
  )
}

export default PageContainer
