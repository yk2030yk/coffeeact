import { createSelectorFamilyWithKey } from '../utils'
import { Loadable } from '@/models/Loadable'
import { loadableState } from './atoms'
import { NAME_SPACE } from '../namespace'

const selectorFamily = createSelectorFamilyWithKey(NAME_SPACE.loadable)

export const loadableSelector = selectorFamily({
  key: 'loadableSelector',
  get: (id: string) => ({ get }) => new Loadable(get(loadableState(id))),
})
