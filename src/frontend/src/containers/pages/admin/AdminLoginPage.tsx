import React from 'react'

import AppLayout from '../../layouts/AppLayout'
import LoginPage from '@/components/pages/admin/LoginPage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <LoginPage />
    </AppLayout>
  )
}

export default PageContainer
