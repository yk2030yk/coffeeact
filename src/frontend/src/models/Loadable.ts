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

  public get isBeforeLoad() {
    return this.state === LOADABLE_STATE.beforeLoad
  }

  public get isLoading() {
    return this.state === LOADABLE_STATE.isLoading
  }

  public get isLoaded() {
    return this.state === LOADABLE_STATE.isLoaded
  }

  public get hasError() {
    return this.state === LOADABLE_STATE.hasError
  }
}
