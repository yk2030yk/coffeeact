import React from 'react'
import ErrorLayout from '../../layouts/ErrorLayout'
import NotFoundPage from '@/components/pages/error/NotFoundPage'

const PageContainer: React.FC = () => {
  return (
    <ErrorLayout>
      <NotFoundPage />
    </ErrorLayout>
  )
}

export default PageContainer
