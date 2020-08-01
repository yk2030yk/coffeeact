import { User } from '@/models/User'
import { createAtomWithKey } from '../utils'
import { NAME_SPACE } from '../namespace'

const atom = createAtomWithKey(NAME_SPACE.auth)

export const SIGN_IN_STATUS = {
  NONE: 'NONE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
}

export const signInState = atom({
  key: 'signInState',
  default: SIGN_IN_STATUS.NONE,
})

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
  dangerouslyAllowMutability: true,
})
