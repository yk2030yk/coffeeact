import React from 'react'
import AppLayout from '../layouts/AppLayout'
import ProfilePage from '@/components/pages/ProfilePage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <ProfilePage />
    </AppLayout>
  )
}

export default PageContainer
