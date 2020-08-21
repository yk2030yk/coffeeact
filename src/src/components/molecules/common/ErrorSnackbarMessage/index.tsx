import React from 'react'

import { ErrorSnackbarMessagePresenter } from './presenter'

type Props = {
  message: string
}

export const ErrorSnackbarMessage: React.FC<Props> = (props) => (
  <ErrorSnackbarMessagePresenter {...props} />
)
