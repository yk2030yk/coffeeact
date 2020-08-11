import flatten from 'flat'

import { texts } from './texts'
import { title } from './title'

export default flatten({ title, ...texts }) as {
  [key: string]: string
}
