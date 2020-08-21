import React from 'react'
import { RiErrorWarningLine } from '@/components/atoms/icons'

import { theme, colorUtils } from '@/styles'
import { SnackbarMessagePresenter } from '../SnackbarMessage/presenter'

type Props = {
  message: string
}

export const ErrorSnackbarMessagePresenter: React.FC<Props> = ({ message }) => (
  <SnackbarMessagePresenter
    message={message}
    Icon={RiErrorWarningLine}
    color={colorUtils.alpha(theme.color.fusionRed)}
  />
)
