import { useCallback } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'

import { loadableState } from './atoms'
import { loadableSelector } from './selectors'
import { LOADABLE_STATE } from '@/models/Loadable'

export const useLoadable = (id: string) => {
  const setLoadableState = useSetRecoilState(loadableState(id))
  const loadable = useRecoilValue(loadableSelector(id))

  const start = useCallback(() => setLoadableState(LOADABLE_STATE.isLoading), [
    setLoadableState,
  ])

  const end = useCallback(() => setLoadableState(LOADABLE_STATE.isLoaded), [
    setLoadableState,
  ])

  const error = useCallback(() => setLoadableState(LOADABLE_STATE.hasError), [
    setLoadableState,
  ])

  const reset = useCallback(() => setLoadableState(LOADABLE_STATE.beforeLoad), [
    setLoadableState,
  ])

  return {
    value: loadable,
    start,
    end,
    error,
    reset,
  }
}
