import React from 'react'

import ErrorTemplate from '../../templates/ErrorTemplate'

const Page: React.FC = () => (
  <ErrorTemplate
    errorTitle="404 Not Found"
    errorMessage="指定されたページは存在しません。"
  />
)

export default Page
