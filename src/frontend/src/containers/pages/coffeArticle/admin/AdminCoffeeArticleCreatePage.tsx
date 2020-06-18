import React from 'react'

import AppLayout from '../../../layouts/AppLayout'
import AdminCoffeeArticleCreatePage from '@/components/pages/coffeeArticle/admin/AdminCoffeeArticleCreatePage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <AdminCoffeeArticleCreatePage />
    </AppLayout>
  )
}

export default PageContainer
