import { createAtomWithKey } from '../utils'
import { NAME_SPACE } from '../namespace'

const atom = createAtomWithKey(NAME_SPACE.articleTag)

export const tagListState = atom<string[]>({
  key: 'tagListState',
  default: [],
})
