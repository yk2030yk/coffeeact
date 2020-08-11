import { createSelectorWithKey } from '../utils'
import { NAME_SPACE } from '../namespace'
import { signInState, SIGN_IN_STATUS } from './atoms'

const selector = createSelectorWithKey(NAME_SPACE.auth)

export const isSignInSelector = selector({
  key: 'isSignInSelector',
  get: ({ get }) => get(signInState) === SIGN_IN_STATUS.SIGN_IN,
})
