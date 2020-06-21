import { useState, useCallback } from 'react'
import { randomString } from '@/utils/util'

export type SnackbarMessage = {
  id: string
  type: string
  message: string
}

export const SnackbarType = {
  INFO: 'info',
  Error: 'error',
}

const createSnackbarMessage = (
  message: string,
  isError: boolean
): SnackbarMessage => ({
  id: randomString(),
  type: isError ? SnackbarType.Error : SnackbarType.INFO,
  message,
})

export const useSnackbar = () => {
  const [snackbarMessages, setSnackbarMessages] = useState<SnackbarMessage[]>(
    []
  )

  const pushSnackbarMessage = useCallback(
    (message: string, isError = false) => {
      const sm = createSnackbarMessage(message, isError)
      setSnackbarMessages((messages) => [...messages, sm])
      setTimeout(() => {
        setSnackbarMessages((messages) =>
          messages.filter((m) => m.id !== sm.id)
        )
      }, 1000)
    },
    []
  )

  return {
    snackbarMessages,
    pushSnackbarMessage,
  }
}
