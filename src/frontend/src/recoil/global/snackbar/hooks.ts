import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

import { randomString } from '@/utils/util'
import { snackbarMessagesState, SnackbarType } from './atoms'

const createSnackbarMessage = (message: string, isError: boolean) => ({
  id: randomString(),
  message,
  type: isError ? SnackbarType.Error : SnackbarType.INFO,
})

export const useSnackbarMessages = () => {
  const [snackbarMessages, setSnackbarMessages] = useRecoilState(
    snackbarMessagesState
  )

  const pushSnackbarMessage = useCallback(
    (message: string, isError: boolean) => {
      const sm = createSnackbarMessage(message, isError)
      setSnackbarMessages((old) => [...old, sm])
      setTimeout(() => {
        setSnackbarMessages((old) => old.filter((m) => m.id !== sm.id))
      }, 2000)
    },
    [setSnackbarMessages]
  )

  return {
    snackbarMessages,
    pushSnackbarMessage,
  }
}
