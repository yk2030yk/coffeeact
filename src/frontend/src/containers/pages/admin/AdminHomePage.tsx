import React from 'react'

import AppLayout from '../../layouts/AppLayout'
import AdminHomePage from '@/components/pages/admin/AdminHomePage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <AdminHomePage />
    </AppLayout>
  )
}

export default PageContainer
