import { useRecoilValue } from 'recoil'

import { snackbarMessagesState } from '@/recoil/snackbar'

export const useProps = () => {
  const snackbarMessages = useRecoilValue(snackbarMessagesState)

  return {
    snackbarMessages,
  }
}
