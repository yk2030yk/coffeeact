import {
  createAtomFamilyWithKey,
  createSelectorFamilyWithKey,
} from '../../utils'

const atomFamily = createAtomFamilyWithKey('loadable')
const selectorFamily = createSelectorFamilyWithKey('loadable')

export const STATE = {
  beforeLoad: 'beforeLoad',
  hasError: 'hasError',
  isLoading: 'isLoading',
  isLoaded: 'isLoaded',
} as const

type State = typeof STATE[keyof typeof STATE]

class Loadable {
  private state: State

  constructor(state: State) {
    this.state = state
  }

  isLoading() {
    return this.state === STATE.isLoading
  }

  isLoaded() {
    return this.state === STATE.isLoaded
  }

  hasError() {
    return this.state === STATE.hasError
  }

  beforeLoad() {
    return this.state === STATE.beforeLoad
  }
}

export const loadableState = atomFamily<State, string>({
  key: 'loadableState',
  default: STATE.beforeLoad,
})

export const errorState = atomFamily<string | undefined, string>({
  key: 'errorState',
  default: undefined,
})

export const loadableSelector = selectorFamily({
  key: 'loadableSelector',
  get: (id: string) => ({ get }) => new Loadable(get(loadableState(id))),
})
