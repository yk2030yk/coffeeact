import { User } from '@/models'
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

export const authErrorState = atom<string | null>({
  key: 'authErrorState',
  default: null,
})

export const loginEmailState = atom<string>({
  key: 'loginEmailState',
  default: '',
})

export const loginPasswordState = atom<string>({
  key: 'loginPasswordState',
  default: '',
})
