import { useCallback } from 'react'

import { useLoadable } from '@/recoil/loadable'

export const useAsyncTask = <Result, Args extends unknown[]>(
  taskId: string,
  task: (...args: Args) => Promise<Result>
) => {
  const { value, start, end, reset, error } = useLoadable(taskId)

  const execute = useCallback(
    async (...args: Args): Promise<Result | undefined> => {
      let result: Result | undefined
      reset()
      start()

      try {
        result = await task(...args)
      } catch (e) {
        error()
        throw e
      }

      end()

      return result
    },
    [task, start, end, reset, error]
  )

  return { execute, loadable: value }
}
