import { useCallback, useReducer } from 'react'
import { NotMatchActionTypeError } from '@/errors'

const ActionType = {
  RESET: 'RESET',
  START: 'START',
  FINISH: 'FINISH',
} as const

type State = {
  error: string
  isLoading: boolean
  isLoaded: boolean
}

type Action = {
  type: keyof typeof ActionType
  error?: string
}

const reducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case ActionType.RESET:
      return {
        ...state,
        error: '',
        isLoading: false,
        isLoaded: false,
      }
    case ActionType.START:
      return {
        ...state,
        error: '',
        isLoading: true,
        isLoaded: false,
      }
    case ActionType.FINISH:
      return {
        ...state,
        error: action?.error || '',
        isLoading: false,
        isLoaded: true,
      }
    default:
      throw new NotMatchActionTypeError(action.type)
  }
}

const initialState: State = {
  error: '',
  isLoading: false,
  isLoaded: false,
}

export const useAsyncTask = <Result, Args extends unknown[]>(
  task: (...args: Args) => Promise<Result>
) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const reset = useCallback(() => {
    dispatch({ type: ActionType.RESET })
  }, [])

  const execute = useCallback(
    async (...args: Args): Promise<Result | undefined> => {
      let result: Result | undefined
      let error = ''
      dispatch({ type: ActionType.RESET })
      dispatch({ type: ActionType.START })
      try {
        result = await task(...args)
      } catch (e) {
        error = e.message || 'async task error'
      }
      dispatch({ type: ActionType.FINISH, error })
      return result
    },
    [task]
  )

  return {
    execute,
    reset,
    ...state,
  }
}
