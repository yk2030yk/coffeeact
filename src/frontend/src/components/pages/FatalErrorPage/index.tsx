import React from 'react'

import ErrorTemplate from '../../templates/ErrorTemplate'

const Page: React.FC = () => (
  <ErrorTemplate
    errorTitle="Fatal Error"
    errorMessage="エラーが発生しました。"
  />
)

export default Page
