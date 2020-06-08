import React from 'react'

import ErrorLayout from '../layouts/ErrorLayout'
import FatalErrorPage from '@/components/pages/FatalErrorPage'

const PageContainer: React.FC = () => {
  return (
    <ErrorLayout>
      <FatalErrorPage />
    </ErrorLayout>
  )
}

export default PageContainer
