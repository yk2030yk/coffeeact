import { createIntl, createIntlCache } from 'react-intl'

import messages from './ja'

const locale = 'ja'
const cache = createIntlCache()

export const intl = createIntl(
  {
    locale,
    messages,
  },
  cache
)
