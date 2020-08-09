import { createAtomWithKey } from '../utils'
import { NAME_SPACE } from '../namespace'

import { Article } from '@/models/Article'

const atom = createAtomWithKey(NAME_SPACE.article)

export const articleState = atom<Article>({
  key: 'articleState',
  default: new Article(),
})
