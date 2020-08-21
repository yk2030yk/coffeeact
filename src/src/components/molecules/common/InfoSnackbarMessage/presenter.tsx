import React from 'react'
import { RiInformationLine } from '@/components/atoms/icons'

import { theme, colorUtils } from '@/styles'
import { SnackbarMessagePresenter } from '../SnackbarMessage/presenter'

type Props = {
  message: string
}

export const InfoSnackbarMessagePresenter: React.FC<Props> = ({ message }) => (
  <SnackbarMessagePresenter
    message={message}
    Icon={RiInformationLine}
    color={colorUtils.alpha(theme.color.blueRibbon)}
  />
)
