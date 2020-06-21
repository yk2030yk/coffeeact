import React from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'

import { theme, colorUtils } from '@/styles'
import SnackbarMessage from '../SnackbarMessage'

type Props = {
  message: string
}

const ErrorSnackbarMessage: React.FC<Props> = ({ message }) => (
  <SnackbarMessage
    message={message}
    Icon={RiErrorWarningLine}
    color={colorUtils.alpha(theme.color.fusionRed)}
  />
)

export default ErrorSnackbarMessage
