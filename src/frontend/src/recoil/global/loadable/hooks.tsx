import { useCallback } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { loadableState, loadableSelector, STATE } from './atoms'

export const useLoadable = (id: string) => {
  const setLoadable = useSetRecoilState(loadableState(id))
  const value = useRecoilValue(loadableSelector(id))

  const start = useCallback(() => setLoadable(STATE.isLoading), [setLoadable])
  const end = useCallback(() => setLoadable(STATE.isLoaded), [setLoadable])
  const error = useCallback(() => setLoadable(STATE.hasError), [setLoadable])
  const reset = useCallback(() => setLoadable(STATE.beforeLoad), [setLoadable])

  return {
    value,
    start,
    end,
    error,
    reset,
  }
}
