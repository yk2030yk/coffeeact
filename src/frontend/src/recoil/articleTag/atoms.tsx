import { createAtomWithKey } from '@/recoil/utils'

const atom = createAtomWithKey('articleTag')

export const tagListState = atom<string[]>({
  key: 'tagListState',
  default: [],
})
