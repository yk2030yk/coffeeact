import React from 'react'
import AppLayout from '../../../layouts/AppLayout'
import CoffeeArticleListPage from '@/components/pages/coffeeArticle/user/CoffeeArticleListPage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <CoffeeArticleListPage />
    </AppLayout>
  )
}

export default PageContainer
