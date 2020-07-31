import { createAtomWithKey } from '../utils'
import { NAME_SPACE } from '../namespace'

const atom = createAtomWithKey(NAME_SPACE.auth)

export const SIGN_IN_STATUS = {
  NONE: 'none',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
}

export const signInState = atom({
  key: 'signInState',
  default: SIGN_IN_STATUS.SIGN_OUT,
})
