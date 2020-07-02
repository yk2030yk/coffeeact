import { atom } from 'recoil'

export const SnackbarType = {
  INFO: 'info',
  Error: 'error',
}

export type SnackbarMessage = {
  id: string
  type: typeof SnackbarType[keyof typeof SnackbarType]
  message: string
}

export const snackbarMessagesState = atom<SnackbarMessage[]>({
  key: '',
  default: [],
})
