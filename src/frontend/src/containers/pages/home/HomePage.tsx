import React from 'react'
import AppLayout from '../../layouts/AppLayout'
import HomePage from '@/components/pages/home/HomePage'

const PageContainer: React.FC = () => {
  return (
    <AppLayout>
      <HomePage />
    </AppLayout>
  )
}

export default PageContainer
