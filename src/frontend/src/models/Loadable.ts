export const LOADABLE_STATE = {
  beforeLoad: 'beforeLoad',
  hasError: 'hasError',
  isLoading: 'isLoading',
  isLoaded: 'isLoaded',
} as const

export type LoadableState = typeof LOADABLE_STATE[keyof typeof LOADABLE_STATE]

export class Loadable {
  private state: LoadableState
  public error: string | null = null

  constructor(state: LoadableState, error: string | null = null) {
    this.state = state
    this.error = error
  }

  public isLoading() {
    return this.state === LOADABLE_STATE.isLoading
  }

  public isLoaded() {
    return this.state === LOADABLE_STATE.isLoaded
  }

  public hasError() {
    return this.state === LOADABLE_STATE.hasError
  }

  public beforeLoad() {
    return this.state === LOADABLE_STATE.beforeLoad
  }
}
