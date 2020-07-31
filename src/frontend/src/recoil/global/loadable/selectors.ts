import { createSelectorFamilyWithKey } from '../../utils'
import { Loadable } from '@/models/Loadable'
import { loadableState } from './atoms'

const selectorFamily = createSelectorFamilyWithKey('loadable')

export const loadableSelector = selectorFamily({
  key: 'loadableSelector',
  get: (id: string) => ({ get }) => new Loadable(get(loadableState(id))),
})
