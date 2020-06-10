import React from 'react'
import AppLayout from '../layouts/AppLayout'
import LoadingPage from '@/components/pages/LoadingPage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <LoadingPage />
    </AppLayout>
  )
}

export default PageContainer
