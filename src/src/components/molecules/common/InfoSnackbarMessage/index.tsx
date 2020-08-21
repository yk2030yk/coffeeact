import React from 'react'

import { InfoSnackbarMessagePresenter } from './presenter'

type Props = {
  message: string
}

export const InfoSnackbarMessage: React.FC<Props> = (props) => (
  <InfoSnackbarMessagePresenter {...props} />
)
