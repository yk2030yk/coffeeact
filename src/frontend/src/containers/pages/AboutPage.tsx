import React from 'react'
import AppLayout from '../layouts/AppLayout'
import AboutPage from '@/components/pages/AboutPage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <AboutPage />
    </AppLayout>
  )
}

export default PageContainer
