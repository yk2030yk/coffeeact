import React from 'react'
import { useRecoilValue } from 'recoil'

import { snackbarMessagesState } from '@/recoil/snackbar'
import { SnackbarMessageListPresenter } from './presenter'

export const SnackbarMessageList: React.FC = () => {
  const snackbarMessages = useRecoilValue(snackbarMessagesState)
  return <SnackbarMessageListPresenter snackbarMessages={snackbarMessages} />
}
