import { createAtomFamilyWithKey } from '../../utils'
import { LoadableState, LOADABLE_STATE } from '@/models/Loadable'

const atomFamily = createAtomFamilyWithKey('loadable')

export const loadableState = atomFamily<LoadableState, string>({
  key: 'loadableState',
  default: LOADABLE_STATE.beforeLoad,
})

export const errorState = atomFamily<string | undefined, string>({
  key: 'errorState',
  default: undefined,
})
