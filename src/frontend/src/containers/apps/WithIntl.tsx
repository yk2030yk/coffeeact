import React from 'react'
import { RawIntlProvider } from 'react-intl'

import { intl } from '@/messages'

/**
 * react-intl
 */
const WithIntl: React.FC = ({ children }) => {
  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>
}

export default WithIntl
