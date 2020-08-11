import { createAtomFamilyWithKey } from '../utils'
import { LoadableState, LOADABLE_STATE } from '@/models/Loadable'
import { NAME_SPACE } from '../namespace'

const atomFamily = createAtomFamilyWithKey(NAME_SPACE.loadable)

export const loadableState = atomFamily<LoadableState, string>({
  key: 'loadableState',
  default: LOADABLE_STATE.beforeLoad,
})

export const errorState = atomFamily<string | undefined, string>({
  key: 'errorState',
  default: undefined,
})
